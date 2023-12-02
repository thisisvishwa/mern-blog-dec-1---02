```javascript
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const initialLayout = [
  { id: 'post-list', name: 'Post List' },
  { id: 'comment-list', name: 'Comment List' },
  { id: 'category-list', name: 'Category List' },
  { id: 'tag-list', name: 'Tag List' },
  // Add more components as needed
];

function Layout() {
  const [layout, setLayout] = useState(initialLayout);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(layout);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLayout(items);
  };

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="layout">
        {(provided) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {layout.map(({ id, name }, index) => (
              <Draggable key={id} draggableId={id} index={index}>
                {(provided) => (
                  <div
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {name}
                  </div>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}

export default Layout;
```