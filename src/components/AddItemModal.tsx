import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField, Select, MenuItem } from '@mui/material';
import { addItem } from '@/app/actions';

const AddItemModal = ({ trigger }: { trigger: (openModal: () => void) => React.ReactNode }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [itemName, setItemName] = useState('');
    const [itemCover, setItemCover] = useState('');
    const [itemType, setItemType] = useState('');
    const [itemYear, setItemYear] = useState('');
    const [itemDescription, setItemDescription] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleAddClick = () => {
        setIsAddModalOpen(true);
    };

    const handleCloseAddModal = () => {
        setIsAddModalOpen(false);
        // Reset form
        setItemName('');
        setItemCover('');
        setItemType('');
        setItemYear('');
        setItemDescription('');
        setError(null);
    };

    const handleAddItem = async () => {
        try {
            setIsSubmitting(true);
            setError(null);
            
            const result = await addItem({
                title: itemName,
                img_link: itemCover,
                category: itemType,
                release_date: itemYear,
                description: itemDescription,
            });
            
            if (!result.success) {
                setError(result.error || 'Une erreur est survenue');
                return;
            }
            
            handleCloseAddModal();
        } catch (error) {
            console.error('Error adding item:', error);
            setError('Une erreur est survenue lors de l\'ajout de l\'élément');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <>
            {/* Le trigger (bouton Add) est passé en props */}
            {trigger(handleAddClick)}

            <Dialog open={isAddModalOpen} onClose={handleCloseAddModal} >
                <DialogTitle>Ajouter un élément</DialogTitle>
                <DialogContent className="flex flex-col gap-4">
                    {error && (
                        <div className="text-red-500 mb-4">{error}</div>
                    )}
                    <TextField
                        autoFocus
                        margin="dense"
                        label="Nom de l'élément"
                        type="text"
                        variant="outlined"
                        value={itemName}
                        onChange={(e) => setItemName(e.target.value)}
                        className="mb-4"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="lien vers la cover"
                        type="text"
                        variant="outlined"
                        value={itemCover}
                        onChange={(e) => setItemCover(e.target.value)}
                        className="mb-8"
                    />
                    {/* <InputLabel id="demo-multiple-name-label">Type de l'élément</InputLabel> */}
                    <Select
                        autoFocus
                        margin="dense"
                        label="Type de l'élément"
                        variant="outlined"
                        value={itemType}
                        onChange={(e) => setItemType(e.target.value)}
                        className="mt-4"
                    >
                        <MenuItem value="film">Film</MenuItem>
                        <MenuItem value="serie">Série</MenuItem>
                    </Select>
                    <TextField
                        autoFocus
                        margin="dense"
                        label="année de sortie"
                        type="number"
                        variant="standard"
                        value={itemYear}
                        onChange={(e) => setItemYear(e.target.value)}
                        className="mb-8 w-2/3"
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        label="description"
                        type="text"
                        variant="outlined"
                        value={itemDescription}
                        onChange={(e) => setItemDescription(e.target.value)}
                        className="mb-8"
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCloseAddModal}>Annuler</Button>
                    <Button 
                        onClick={handleAddItem} 
                        variant="contained"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Ajout en cours...' : 'Valider'}
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default AddItemModal;
