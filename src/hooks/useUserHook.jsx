import { useState, useEffect } from "react";
import { errorAlert } from "../components/common/Alerts";
import { getUsers, getUserByEmail, getUsersByRol, profile, getRoles, updated, 
  deleteUser } from '../API/users.js';
import { getTypeDocs } from "../API/typeDocs.js";
import { useAuth } from "../context/AuthContext.jsx";

export const useUserHook = (navigate) => {
    const { user } = useAuth();
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    const [loading, setLoading] = useState(true);
    const [roleID, setRoleID] = useState(null);
    const [openModal, setOpenModal] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null);
    const [userProfile, setUserProfile] = useState(null);
    const [roles, setRoles] = useState([]);
    const [typeDocs, setTypeDocs] = useState([]);

    const handleNextPage = () => {
        if (page < totalPages) setPage((prev) => prev + 1);
    };
    
    const handlePrevPage = () => {
        if (page > 1) setPage((prev) => prev - 1);
    };

    const handleOpenModal = (user) => {
        setSelectedUser(user);
        setOpenModal(true);
    };
    
    const handleCloseModal = () => {
        setSelectedUser(null);
        setOpenModal(false);
    };

    const getUserProfile = async () => {
      try {
        const res = await profile();
        if (!res.status) throw new Error("Sesión cerrada por seguridad"); 
        setUserProfile(res.data);
      } catch (err) {
        await logout();
        errorAlert(err.message);
        navigate("/login");
      } finally {
        setLoading(false);
      }
    }

    const searchUserByEmail = async (data) => {
        try {
          setLoading(true);
          const res = await getUserByEmail(data);
          if (!res.status) throw new Error(res.message);
          handleOpenModal(res.data);
        } catch (err) {
          errorAlert(err.message);
        } finally {
          setLoading(false);
        }
    };

    const getUsersByRole = async (page, roleID) => {
        try {
          setLoading(true);
          if (roleID === 0) {
            window.location.reload();
            return;
          }
          const res = await getUsersByRol(page, roleID);
          if (!res.status) throw new Error(res.message);
          setUsers(res.data.users);
          setTotalPages(res.data.pagination.totalPages);
          setTotalUsers(res.data.pagination.totalUsers);
        } catch (err) {
          if (roleID != null) errorAlert(err.message);
        } finally {
          setLoading(false);
        }
    };

    const getRolesRequest = async () => {
      try {
        const res = await getRoles();
        if (!res.status) throw new Error("Error al obtener roles");
        setRoles(res.data);
      } catch (err) {
        errorAlert(err.message);
      }
    }

    const getTypeDocsRequest = async () => {
      try {
        const res = await getTypeDocs();
        if (!res.status) throw new Error("Error al obtener tipos de documentos");
        setTypeDocs(res.data);
      } catch (err) {
        errorAlert(err.message);
      }
    };

    const getAllUsers = async (page) => {
        try {
          const res = await getUsers(page);
          if (!res.status) throw new Error(res.message);
          setUsers(res.data.users);
          setTotalPages(res.data.pagination.totalPages);
          setTotalUsers(res.data.pagination.totalUsers);
        } catch (err) {
          errorAlert(err.message);
          navigate("/login");
        } finally {
          setLoading(false);
        }
    };

      // Cambiar rol
    const handleRoleChange = (newRoleID) => {
        setRoleID(newRoleID);
        setPage(1);
    };

    const updateUser = async (newUserData) => {
      try {
        const res = await updated(newUserData);
        if (!res.status) throw new Error(res.message);
        successAlert("Datos actualizados con éxito");
      } catch (err) {
        errorAlert(err.message);
      }
    };

    const deleteUserAccount = async (userID) => {
      try {
        const res = await deleteUser(userID);
        if (!res.status) throw new Error("Error al eliminar usuario");
        successAlert("Usuario eliminado con éxito");
      } catch (err) {
        errorAlert(err.message);
      }
    };

    // Efectos para cargar datos según rol o todos los usuarios
    useEffect(() => {
        if(user.rol_ID === 1) roleID ? getUsersByRole(page, roleID) : getAllUsers(page);
    }, [page, roleID]);

    return {
        users,
        userProfile,
        page,
        totalPages,
        totalUsers,
        loading,
        openModal,
        selectedUser,
        setPage,
        handleNextPage,
        handlePrevPage,
        handleOpenModal,
        handleCloseModal,
        searchUserByEmail,
        handleRoleChange,
        getUserProfile,
        roles,
        typeDocs,
        getRolesRequest,
        getTypeDocsRequest,
        updateUser,
        deleteUserAccount,
      };

}
