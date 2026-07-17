import { FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";

export default function TableActions({
    row,
    onView,
    onEdit,
    onDelete,
    extraActions = [],
}) {
    return (
        <div className="flex items-center justify-center gap-2">

            {extraActions.map((action, index) => (
                <button
                    key={index}
                    onClick={() => action.onClick(row)}
                    title={action.title}
                    className={action.className}
                >
                    {action.icon}
                </button>
            ))}

            {onView && (
                <button
                    onClick={() => onView(row.id)}
                    title="View"
                    className="w-9 h-9 rounded-lg border border-slate-200 hover:bg-green-50 hover:border-green-300 transition flex items-center justify-center text-green-600"
                >
                    <FiEye size={17} />
                </button>
            )}
            {onEdit && (
                <button
                    onClick={() => onEdit(row.id)}
                    title="Edit"
                    className="w-9 h-9 rounded-lg border border-slate-200 hover:bg-blue-50 hover:border-blue-300 transition flex items-center justify-center text-blue-600"
                >
                    <FiEdit2 size={17} />
                </button>
            )}

            {onDelete && (
                <button
                    onClick={() => onDelete(row)}
                    title="Delete"
                    className="w-9 h-9 rounded-lg border border-slate-200 hover:bg-red-50 hover:border-red-300 transition flex items-center justify-center text-red-600"
                >
                    <FiTrash2 size={17} />
                </button>
            )}

        </div>
    );
}