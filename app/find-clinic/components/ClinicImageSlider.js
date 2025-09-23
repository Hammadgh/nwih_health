"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';

export default function ClinicImageSlider({ items }) {
	const [currentIndex, setCurrentIndex] = useState(0);
	const containerRef = useRef(null);
	const total = items?.length || 0;

	// Lightbox state
	const [lightboxOpen, setLightboxOpen] = useState(false);
	const [zoom, setZoom] = useState(1);
	const [offset, setOffset] = useState({ x: 0, y: 0 });
	const dragStateRef = useRef({ dragging: false, startX: 0, startY: 0, startOffsetX: 0, startOffsetY: 0 });

	const clampIndex = useCallback((index) => {
		if (total === 0) return 0;
		if (index < 0) return total - 1;
		if (index >= total) return 0;
		return index;
	}, [total]);

	const goTo = useCallback((index) => setCurrentIndex((prev) => clampIndex(index)), [clampIndex]);
	const goNext = useCallback(() => goTo(currentIndex + 1), [currentIndex, goTo]);
	const goPrev = useCallback(() => goTo(currentIndex - 1), [currentIndex, goTo]);

	useEffect(() => {
		const handleKey = (e) => {
			if (lightboxOpen) {
				if (e.key === 'Escape') setLightboxOpen(false);
				if (e.key === 'ArrowRight') goNext();
				if (e.key === 'ArrowLeft') goPrev();
				return;
			}
			if (e.key === 'ArrowRight') goNext();
			if (e.key === 'ArrowLeft') goPrev();
		};
		window.addEventListener('keydown', handleKey);
		return () => window.removeEventListener('keydown', handleKey);
	}, [goNext, goPrev, lightboxOpen]);

	// Prevent body scroll when lightbox is open
	useEffect(() => {
		if (lightboxOpen) {
			const { overflow } = document.body.style;
			document.body.style.overflow = 'hidden';
			return () => {
				document.body.style.overflow = overflow;
			};
		}
	}, [lightboxOpen]);

	const openLightbox = useCallback(() => {
		setLightboxOpen(true);
		setZoom(1);
		setOffset({ x: 0, y: 0 });
	}, []);

	const closeLightbox = useCallback(() => {
		setLightboxOpen(false);
		setZoom(1);
		setOffset({ x: 0, y: 0 });
	}, []);

	const zoomAt = useCallback((delta, clientX, clientY, container) => {
		setZoom((prevZoom) => {
			const newZoom = Math.min(5, Math.max(1, prevZoom + delta));
			if (!container) return newZoom;
			if (newZoom === prevZoom) return prevZoom;
			const rect = container.getBoundingClientRect();
			const px = clientX - rect.left - rect.width / 2;
			const py = clientY - rect.top - rect.height / 2;
			setOffset((prev) => ({
				x: prev.x - (px * (newZoom - prevZoom)) / newZoom,
				y: prev.y - (py * (newZoom - prevZoom)) / newZoom
			}));
			return newZoom;
		});
	}, []);

	const onWheel = useCallback((e) => {
		if (!lightboxOpen) return;
		e.preventDefault();
		const delta = e.deltaY < 0 ? 0.2 : -0.2;
		const container = e.currentTarget;
		zoomAt(delta, e.clientX, e.clientY, container);
	}, [lightboxOpen, zoomAt]);

	const onMouseDown = useCallback((e) => {
		if (!lightboxOpen || zoom <= 1) return;
		e.preventDefault();
		dragStateRef.current = {
			dragging: true,
			startX: e.clientX,
			startY: e.clientY,
			startOffsetX: offset.x,
			startOffsetY: offset.y
		};
	}, [lightboxOpen, zoom, offset]);

	const onMouseMove = useCallback((e) => {
		const st = dragStateRef.current;
		if (!st.dragging) return;
		e.preventDefault();
		const dx = e.clientX - st.startX;
		const dy = e.clientY - st.startY;
		setOffset({ x: st.startOffsetX + dx, y: st.startOffsetY + dy });
	}, []);

	const onMouseUp = useCallback(() => {
		dragStateRef.current.dragging = false;
	}, []);

	useEffect(() => {
		if (!lightboxOpen) return;
		window.addEventListener('mousemove', onMouseMove);
		window.addEventListener('mouseup', onMouseUp);
		return () => {
			window.removeEventListener('mousemove', onMouseMove);
			window.removeEventListener('mouseup', onMouseUp);
		};
	}, [lightboxOpen, onMouseMove, onMouseUp]);

	const hasItems = total > 0;
	const activeItem = hasItems ? items[currentIndex] : null;

	return (
		<div className="w-full">
			<div className="relative">
				<div
					ref={containerRef}
					className="relative h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-lg shadow-md bg-gray-100"
				>
					{hasItems && (
						<Image
							key={activeItem.src}
							src={activeItem.src}
							alt={activeItem.title || 'Clinic image'}
							fill
							className="object-contain cursor-zoom-in"
							sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1200px"
							priority
							onClick={openLightbox}
						/>
					)}
					{!hasItems && (
						<div className="h-full w-full flex items-center justify-center text-gray-500">
							No images available
						</div>
					)}
					{/* gradient overlay for caption readability */}
					<div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent" />
					{/* caption */}
					{activeItem?.title && (
						<div className="absolute bottom-3 left-4 right-4 text-white drop-shadow-md">
							<p className="text-sm sm:text-base">{activeItem.title}</p>
						</div>
					)}
				</div>

				{/* Controls */}
				{hasItems && total > 1 && (
					<>
						<button
							aria-label="Previous image"
							onClick={goPrev}
							className="absolute left-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white w-9 h-9"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
								<path fillRule="evenodd" d="M15.53 4.47a.75.75 0 010 1.06L10.06 11l5.47 5.47a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clipRule="evenodd" />
							</svg>
						</button>
						<button
							aria-label="Next image"
							onClick={goNext}
							className="absolute right-2 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-black/40 hover:bg-black/60 text-white w-9 h-9"
						>
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
								<path fillRule="evenodd" d="M8.47 19.53a.75.75 0 010-1.06L13.94 13 8.47 7.53a.75.75 0 111.06-1.06l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 01-1.06 0z" clipRule="evenodd" />
							</svg>
						</button>
						{/* Dots */}
						<div className="absolute bottom-3 left-0 right-0 flex items-center justify-center gap-2">
							{items.map((_, i) => (
								<button
									key={i}
									aria-label={`Go to image ${i + 1}`}
									onClick={() => goTo(i)}
									className={`h-2.5 rounded-full transition-all ${i === currentIndex ? 'w-6 bg-white' : 'w-2.5 bg-white/60 hover:bg-white/80'}`}
								/>
							))}
						</div>
					</>
				)}
			</div>

			{/* Thumbnails */}
			{hasItems && total > 1 && (
				<div className="mt-3 grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
					{items.map((thumb, i) => (
						<button
							key={thumb.src}
							onClick={() => goTo(i)}
							className={`relative h-14 sm:h-16 md:h-18 lg:h-20 overflow-hidden rounded-md border ${i === currentIndex ? 'border-[#0090c6] ring-2 ring-[#0090c6]/30' : 'border-gray-200 hover:border-gray-300'}`}
						>
						<Image
								src={thumb.src}
								alt={thumb.title || 'Clinic image thumbnail'}
								fill
							className="object-contain"
								sizes="200px"
							/>
						</button>
					))}
				</div>
			)}
		{/* Lightbox Modal */}
		{lightboxOpen && hasItems && (
			<div
				className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center"
				role="dialog"
				aria-modal="true"
			>
				<button
					className="absolute inset-0 cursor-zoom-out"
					aria-label="Close"
					onClick={closeLightbox}
				/>
				<div
					className="relative max-w-[95vw] max-h-[90vh] w-full h-full flex items-center justify-center px-6"
					onWheel={onWheel}
					onMouseDown={onMouseDown}
				>
					<div
						className="relative w-full h-[70vh] select-none"
						style={{
							transform: `translate(${offset.x}px, ${offset.y}px) scale(${zoom})`,
							transition: dragStateRef.current.dragging ? 'none' : 'transform 150ms ease-out'
						}}
						onDoubleClick={(e) => {
							const container = e.currentTarget.parentElement;
							zoomAt(zoom >= 2 ? -(zoom - 1) : 1, e.clientX, e.clientY, container);
						}}
					>
						<Image
							src={activeItem.src}
							alt={activeItem.title || 'Clinic image enlarged'}
							fill
							className="object-contain pointer-events-none"
							sizes="100vw"
							priority
						/>
					</div>
				</div>

				{/* Lightbox Controls */}
				<div className="absolute top-4 right-4 flex gap-2">
					<button onClick={closeLightbox} aria-label="Close" className="inline-flex items-center justify-center rounded-md bg-white/20 hover:bg-white/30 text-white w-9 h-9">
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5"><path fillRule="evenodd" d="M6.225 4.811a.75.75 0 011.06 0L12 9.525l4.715-4.714a.75.75 0 111.06 1.06L13.06 10.586l4.715 4.714a.75.75 0 11-1.06 1.06L12 11.646l-4.715 4.714a.75.75 0 11-1.06-1.06l4.714-4.715-4.714-4.715a.75.75 0 010-1.06z" clipRule="evenodd"/></svg>
					</button>
				</div>
				<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2">
					<button aria-label="Zoom out" onClick={() => setZoom((z) => Math.max(1, z - 0.2))} className="px-3 py-2 rounded-md bg-white/20 hover:bg-white/30 text-white">-</button>
					<button aria-label="Reset" onClick={() => { setZoom(1); setOffset({ x: 0, y: 0 }); }} className="px-3 py-2 rounded-md bg-white/20 hover:bg-white/30 text-white">Reset</button>
					<button aria-label="Zoom in" onClick={() => setZoom((z) => Math.min(5, z + 0.2))} className="px-3 py-2 rounded-md bg-white/20 hover:bg-white/30 text-white">+</button>
				</div>
				{total > 1 && (
					<>
						<button aria-label="Previous" onClick={goPrev} className="absolute left-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white w-10 h-10">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M15.53 4.47a.75.75 0 010 1.06L10.06 11l5.47 5.47a.75.75 0 11-1.06 1.06l-6-6a.75.75 0 010-1.06l6-6a.75.75 0 011.06 0z" clipRule="evenodd" /></svg>
						</button>
						<button aria-label="Next" onClick={goNext} className="absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center rounded-full bg-white/20 hover:bg-white/30 text-white w-10 h-10">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6"><path fillRule="evenodd" d="M8.47 19.53a.75.75 0 010-1.06L13.94 13 8.47 7.53a.75.75 0 111.06-1.06l6 6a.75.75 0 010 1.06l-6 6a.75.75 0 01-1.06 0z" clipRule="evenodd" /></svg>
						</button>
					</>
				)}
			</div>
		)}
		</div>
	);
}


