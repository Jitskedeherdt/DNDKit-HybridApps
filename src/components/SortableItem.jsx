import React from 'react';
import { useSortable } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export function SortableItem({ id, text }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        padding: '16px',
        margin: '8px 0',
        backgroundColor: '#f4f4f4',
        border: '1px solid #ddd',
        borderRadius: '4px',
        cursor: 'grab',
        color: 'black',
    };

    return (
        <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
            {text}
        </div>
    );
}