import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { createTodo } from "../models/todo.model";
import { useTodos } from "../context/TodoContext";

export default function AddTodoDialog({ open, onClose }) {
  const { addTodo } = useTodos();

  const [form, setForm] = useState({
    title: "",
    description: "",
  });

  const isInvalid = !form.title.trim();

  const handleSubmit = () => {
    if (isInvalid) return;
    addTodo(createTodo(form.title, form.description));
    onClose();
    setForm({ title: "", description: "" });
  };

  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        sx: {
          borderRadius: "12px",
        },
      }}
    >
      <DialogTitle sx={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: "1.8rem",
    fontWeight: 600,
    px: 3,
    py: 2,
  }}>
        Add Task
        <IconButton onClick={onClose}>
          <CloseIcon />
        </IconButton>
      </DialogTitle>

      <DialogContent dividers sx={{
    px: 3,
    py: 2.5,
  }}>
        <TextField
          label="Title"
          fullWidth
          margin="normal"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          error={isInvalid}
          helperText={isInvalid ? "Title is required" : ""}
          InputProps={{
      sx: {
        fontSize: "1.5rem",
        height: "4.4rem",
      },
    }}
    InputLabelProps={{
      sx: {
        fontSize: "1.3rem",
      },
    }}
    FormHelperTextProps={{
      sx: {
        fontSize: "1.2rem",
      },
    }}
        />

        <TextField
          label="Description"
          fullWidth
          multiline
          rows={3}
          margin="normal"
          value={form.description}
          onChange={(e) => setForm({ ...form, description: e.target.value })}
          InputProps={{
      sx: {
        fontSize: "1.4rem",
      },
    }}
    InputLabelProps={{
      sx: {
        fontSize: "1.3rem",
      },
    }}
        />
      </DialogContent>

      <DialogActions sx={{
    px: 3,
    py: 2,
    gap: 1.5,
  }}>
        <Button className="btn btn-white" onClick={onClose} variant="outlined">
          Cancel
        </Button>
        <Button className="btn btn-primary" onClick={handleSubmit} variant="contained" disabled={isInvalid}>
          Add
        </Button>
      </DialogActions>
    </Dialog>
  );
}
