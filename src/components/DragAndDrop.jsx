'use client'
import {useState} from "react";
import {arrayMove, SortableContext, verticalListSortingStrategy} from "@dnd-kit/sortable";
import {closestCenter, DndContext} from "@dnd-kit/core";
import {SortableItem} from "@/components/SortableItem";

export default function DragAndDrop(){
    const [items, setItems] = useState([
        {id:1, title:"Task1"},
        {id:2, title:"Task2"},
        {id:3, title:"Task3"},
        {id:4, title:"Task4"},
    ])
    const handleDragEnd=(event)=>{
        const {active, over} = event;

        if(active.id !== over.id){
            setItems((items)=>{
                const oldIndex = items.findIndex((item)=> item.id === active.id);
                console.log('old:' +oldIndex);
                const newIndex= items.findIndex((item)=> item.id === over.id);
                console.log('new:' +newIndex);

                return arrayMove(items,oldIndex,newIndex);
            })

        }
    }
    return (
        <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
            <SortableContext items={items} strategy={verticalListSortingStrategy}>
                {items.map((item)=>(
                    <SortableItem key={item.id} id={item.id} text={item.title}></SortableItem>
                ))}

            </SortableContext>
        </DndContext>
    )
}