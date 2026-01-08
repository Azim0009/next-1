"use client";
import { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
} from "@mui/material";

interface User {
  id: number;
  name: string;
  description: string;
  age: number;
}

export default function Page() {
  const [users, setUsers] = useState<User[]>([
    { id: 1, name: "Abyyyy", description: "Frontend Developer", age: 21 },
    { id: 2, name: "Sasan   ", description: "Backend Developer", age: 23 },
  ]);

  const [search, setSearch] = useState("");
  const [open, setOpen] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [form, setForm] = useState({
    name: "",
    description: "",
    age: "",
  });

  const openAddModal = () => {
    setForm({ name: "", description: "", age: "" });
    setEditingId(null);
    setOpen(true);
  };

  const openEditModal = (user: User) => {
    setForm({
      name: user.name,
      description: user.description,
      age: user.age.toString(),
    });
    setEditingId(user.id);
    setOpen(true);
  };

  const saveUser = () => {
    if (!form.name || !form.age) return;

    if (editingId === null) {
      setUsers([
        ...users,
        {
          id: Date.now(),
          name: form.name,
          description: form.description,
          age: Number(form.age),
        },
      ]);
    } else {
      setUsers(
        users.map((u) =>
          u.id === editingId
            ? {
                ...u,
                name: form.name,
                description: form.description,
                age: Number(form.age),
              }
            : u
        )
      );
    }

    setOpen(false);
  };

  const deleteUser = (id: number) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  const filteredUsers = users.filter((u) =>
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-black">
      <div className="max-w-5xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <button
            onClick={openAddModal}
            className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-xl shadow"
          >
            + Add User
          </button>
        </div>

        <input
          type="search"
          placeholder="🔍 Search user..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-3 rounded-xl border bg-white shadow outline-none"
        />

        <div className="overflow-hidden rounded-2xl shadow bg-white">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Description</th>
                <th className="p-4 text-left">Age</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredUsers.map((user) => (
                <tr
                  key={user.id}
                  className="border-t hover:bg-gray-50"
                >
                  <td className="p-4 font-medium">{user.name}</td>
                  <td className="p-4 text-gray-600">
                    {user.description || "—"}
                  </td>
                  <td className="p-4">{user.age}</td>
                  <td className="p-4 text-right space-x-3">
                    <button
                      onClick={() => openEditModal(user)}
                      className="text-indigo-500 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteUser(user.id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Dialog open={open} onClose={() => setOpen(false)} fullWidth maxWidth="sm">
        <DialogTitle>
          {editingId ? "Edit User" : "Add User"}
        </DialogTitle>

        <DialogContent className="space-y-4 mt-2">
          <TextField
            label="Name"
            fullWidth
            value={form.name}
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />

          <TextField
            label="Description"
            fullWidth
            value={form.description}
            onChange={(e) =>
              setForm({ ...form, description: e.target.value })
            }
          />

          <TextField
            label="Age"
            type="number"
            fullWidth
            value={form.age}
            onChange={(e) =>
              setForm({ ...form, age: e.target.value })
            }
          />
        </DialogContent>

        <DialogActions>
          <Button onClick={() => setOpen(false)} color="inherit">
            Cancel
          </Button>
          <Button onClick={saveUser} variant="contained">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
