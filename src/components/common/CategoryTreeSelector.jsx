import { useState } from "react";
import TreeNode from "./TreeNode";

export default function CategoryTreeSelector({
    tree = [],
    selectedCategory,
    onSelect,
}) {

    const [expanded, setExpanded] = useState({});

    const toggleNode = (id) => {

        setExpanded((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));

    };

    return (

        <div className="border border-slate-200 rounded-xl overflow-hidden bg-white">

            <div className="px-4 py-3 border-b bg-slate-50">

                <h3 className="font-semibold text-slate-700">

                    Category Tree

                </h3>

                <p className="text-sm text-slate-500 mt-1">

                    Select the lowest level category.

                </p>

            </div>

            <div className="max-h-[450px] overflow-y-auto">

                {tree.length === 0 ? (

                    <div className="p-6 text-center text-slate-500">

                        No Categories Found

                    </div>

                ) : (

                    tree.map((node) => (

                        <TreeNode
                            key={node.id}
                            node={node}
                            level={0}
                            expanded={expanded}
                            toggleNode={toggleNode}
                            selectedCategory={selectedCategory}
                            onSelect={onSelect}
                        />

                    ))

                )}

            </div>

        </div>

    );

}