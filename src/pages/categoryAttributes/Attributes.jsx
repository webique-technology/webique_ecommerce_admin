import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import AttributeTable from "./AttributeTable";
import DeleteModal from "../../components/common/DeleteModal";

import {
    getAttributes,
    deleteAttribute,
    changeAttributeStatus,
} from "../../services/attributeService";

export default function Attributes() {

    const navigate = useNavigate();

    // const { categoryId } = useParams();
    const { subcategoryId } = useParams();

    const [attributes, setAttributes] = useState([]);

    const [loading, setLoading] = useState(true);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [selectedAttribute, setSelectedAttribute] = useState(null);

    const [pagination, setPagination] = useState({
        current_page: 1,
        last_page: 1,
        per_page: 10,
        total: 0,
    });

    // Breadcrumb Names
    const [categoryName, setCategoryName] = useState("");
    const [subcategoryName, setSubcategoryName] = useState("");

    // -----------------------------------------
    // Fetch Attributes
    // -----------------------------------------

    const fetchAttributes = async (page = 1) => {

        try {

            setLoading(true);

            const response = await getAttributes(subcategoryId, {
                page,
            });

            const result = response.data.data;

            setAttributes(result.data || []);

            setPagination({
                current_page: result.current_page,
                last_page: result.last_page,
                per_page: result.per_page,
                total: result.total,
            });

            // Optional (depends on API response)
            setCategoryName(result.category_name || "");
            setSubcategoryName(result.subcategory_name || "");

        } catch (error) {

            console.error("Attribute List Error :", error);

        } finally {

            setLoading(false);

        }

    };

    // -----------------------------------------

    useEffect(() => {

        fetchAttributes();

    }, [subcategoryId]);

    // -----------------------------------------

    const refreshAttributes = () => {

        fetchAttributes(pagination.current_page);

    };

    // -----------------------------------------

    const handleDelete = (attribute) => {
        console.log("Delete clicked", attribute);
        setSelectedAttribute(attribute);

        setShowDeleteModal(true);

    };
    const confirmDelete = async () => {

        if (!selectedAttribute) return;

        try {

            await deleteAttribute(selectedAttribute.id);

            setShowDeleteModal(false);

            setSelectedAttribute(null);

            refreshAttributes();

        } catch (error) {

            console.error(error);

            alert(
                error.response?.data?.message ||
                "Unable to delete attribute."
            );

        }

    };

    // -----------------------------------------

    const handlePageChange = (page) => {

        fetchAttributes(page);

    };

    // -----------------------------------------

    const handleAdd = () => {

        navigate(`/categories/${subcategoryId}/attributes/add`);

    };

    const handleEdit = (id) => {

        navigate(`/categories/${subcategoryId}/attributes/edit/${id}`);

    };

    // -----------------------------------------

    return (
        <>
            <AttributeTable

                categoryName={categoryName}

                subcategoryName={subcategoryName}

                attributes={attributes}

                loading={loading}

                pagination={pagination}

                onPageChange={handlePageChange}

                onRefresh={refreshAttributes}

                onAdd={handleAdd}

                onEdit={handleEdit}

                onDelete={handleDelete}

            />
            <DeleteModal
                open={showDeleteModal}
                title="Delete Attribute"
                message={`Are you sure you want to delete "${selectedAttribute?.attribute_name}"?`}
                onClose={() => {
                    setShowDeleteModal(false);
                    setSelectedAttribute(null);
                }}
                onConfirm={confirmDelete}
            />

        </>



    );

}