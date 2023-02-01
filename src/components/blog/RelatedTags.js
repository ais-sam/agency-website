;

const RelatedTags = () => {
    const tags = ["design","learn","education","course","online","bag","pen","teacher"]
  return (
    <div className="px-2 mb-12">
      <h4 className="uppercase text-xl font-roboto-con mb-3 font-bold">
        related tag
      </h4>
      <div className="flex gap-2 flex-wrap">
        {tags.map((tag, index) => {
          return (
            <button
              key={index}
              className="text-xs p-1 border rounded-sm font-semibold"
            >
              {tag.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default RelatedTags