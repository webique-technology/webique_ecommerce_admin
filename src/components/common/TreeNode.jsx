import {
    FiChevronRight,
    FiChevronDown,
    FiFolder,
    FiFolderPlus,
    FiCheckCircle,
} from "react-icons/fi";

export default function TreeNode({

    node,

    level = 0,

    expanded,

    toggleNode,

    selectedCategory,

    onSelect,

}) {

    const hasChildren =
        node.children &&
        node.children.length > 0;

    const isExpanded =
        expanded[node.id];

    const isSelected =
        selectedCategory?.id === node.id;

    return (

        <div>

            {/* Row */}

            <div

                className={`
                    flex items-center justify-between
                    px-4 py-3
                    border-b border-slate-100
                    hover:bg-slate-50
                    transition
                    ${isSelected ? "bg-blue-50" : ""}
                `}

                style={{
                    paddingLeft: `${20 + level * 28}px`,
                }}

            >

                <div className="flex items-center gap-3">

                    {/* Expand */}

                    {hasChildren ? (

                        <button
                            type="button"
                            onClick={() => toggleNode(node.id)}
                        >

                            {isExpanded ? (
                                <FiChevronDown />
                            ) : (
                                <FiChevronRight />
                            )}

                        </button>

                    ) : (

                        <div className="w-4" />

                    )}

                    {/* Icon */}

                    {hasChildren ? (

                        <FiFolderPlus className="text-yellow-500" />

                    ) : (

                        <FiFolder className="text-blue-500" />

                    )}

                    {/* Name */}

                    <span
                        className={
                            isSelected
                                ? "font-semibold text-blue-700"
                                : "text-slate-700"
                        }
                    >

                        {node.name}

                    </span>

                </div>

                {/* Select */}

                {!hasChildren && (

                    <button

                        type="button"

                        onClick={() => onSelect(node)}

                        className={`
                            flex items-center gap-2
                            px-3 py-1.5
                            rounded-lg
                            text-sm
                            transition

                            ${isSelected
                                ? "bg-blue-600 text-white"
                                : "border border-slate-300 hover:bg-slate-100"
                            }
                        `}
                    >

                        <FiCheckCircle />

                        {isSelected
                            ? "Selected"
                            : "Select"}

                    </button>

                )}

            </div>

            {/* Children */}

            {hasChildren && isExpanded && (

                node.children.map((child) => (

                    <TreeNode

                        key={child.id}

                        node={child}

                        level={level + 1}

                        expanded={expanded}

                        toggleNode={toggleNode}

                        selectedCategory={selectedCategory}

                        onSelect={onSelect}

                    />

                ))

            )}

        </div>

    );

}