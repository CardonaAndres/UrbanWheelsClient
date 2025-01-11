import { useEffect } from "react";
import { Navbar } from "../../../components/common/Navbar"
import { useUserHook } from "../../../hooks/useUserHook"
import { LoadingSpinner } from "../../../components/common/LoadingSpinner";
import { DocumentTable } from "../../../components/typeDocs/DocumentTable";
import { HeaderTypeDocs } from "../../../components/typeDocs/HeaderTypeDocs";

export const TypeDocsManagement = () => {
    const { typeDocs, getTypeDocsRequest, loading } = useUserHook();
    useEffect(() => {
        getTypeDocsRequest();
    }, []);

    if (loading) return <LoadingSpinner />

    return (
        <>
            <Navbar />
            <HeaderTypeDocs totalTypeDocs={typeDocs.length} />
            <DocumentTable documents={typeDocs} />
        </>
    )
}

