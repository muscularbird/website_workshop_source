import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

// @ts-ignore
const AddItemModal = ({ trigger }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const handleAddClick = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseAddModal = () => {
        setIsAddModalOpen(false);
    };

    return (
        <>
            {/* Le trigger (bouton Add) est passé en props */}
            {trigger(handleAddClick)}

            <Dialog open={isAddModalOpen} onClose={handleCloseAddModal}>
                <DialogTitle>Ajouter un élément</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Nom de l'élément"
                        type="text"
                        fullWidth
                        variant="standard"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAddModal}>Annuler</Button>
                    <Button onClick={handleCloseAddModal} variant="contained">Valider</Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default AddItemModal;
