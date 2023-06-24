import React from 'react';

const Tags = ({ data, selectedTags, onTagClick }: any) => {
    const displayedTags = new Set(); // Хранит уже отображенные теги

    // ...

    return (
        <section className="orders_page_tags">
            <div className="tags-container">
                <div className="tags">
                    {data.map((item: any) =>
                        item.tags.map((tag: any) => {
                            if (!displayedTags.has(tag.uuid)) {
                                displayedTags.add(tag.uuid);
                                return (
                                    <div
                                        key={tag.uuid}
                                        className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
                                        onClick={() => onTagClick(tag)}
                                    >
                                        {tag.name}
                                    </div>
                                );
                            }
                            return null;
                        })
                    )}
                </div>
            </div>
        </section>
    );

// ...

};

export default Tags;
