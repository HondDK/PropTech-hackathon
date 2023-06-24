import React from 'react';

const Tags = ({data, selectedTags, onTagClick}: any) => {
    return (
        <section className="orders_page_tags">
            <div className="tags">
                {data.map((item :any) =>
                    item.tags.map((tag: any) => (
                        <div
                            key={tag.uuid}
                            className={`tag ${selectedTags.includes(tag) ? 'selected' : ''}`}
                            onClick={() => onTagClick(tag)}
                        >
                            {tag.name}
                        </div>
                    ))
                )}
            </div>
        </section>
    );
};

export default Tags;
