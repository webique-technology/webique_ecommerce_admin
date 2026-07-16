export default function DeleteModal({
    open,
    title = "Delete Item",
    message = "Are you sure you want to delete this item?",
    loading = false,
    onClose,
    onConfirm,
}) {
    if (!open) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">

            <div className="w-full max-w-md bg-white rounded-xl shadow-xl">

                {/* Header */}
                <div className="px-6 py-4 border-b">
                    <h2 className="text-lg font-semibold text-slate-800">
                        {title}
                    </h2>
                </div>

                {/* Body */}
                <div className="px-6 py-6">
                    <p className="text-slate-600">
                        {message}
                    </p>
                </div>

                {/* Footer */}
                <div className="flex justify-end gap-3 px-6 py-4 border-t">

                    <button
                        type="button"
                        onClick={onClose}
                        disabled={loading}
                        className="px-5 py-2 rounded-lg border border-slate-300 hover:bg-slate-100"
                    >
                        Cancel
                    </button>

                    <button
                        type="button"
                        disabled={loading}
                        onClick={onConfirm}
                        className="px-5 py-2 rounded-lg bg-red-600 text-white hover:bg-red-700"
                    >
                        {loading ? "Deleting..." : "Delete"}
                    </button>

                </div>

            </div>

        </div>
    );
}