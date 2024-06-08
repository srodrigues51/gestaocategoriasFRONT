import React, { useState } from 'react';
import Navbar from '../../components/navbar';
import Sidebar from '../../components/sidebar';

function Home() {
  const [categories, setCategories] = useState([]);
  const [categoryType, setCategoryType] = useState('');
  const [categoryDescription, setCategoryDescription] = useState('');
  const [filter, setFilter] = useState('');
  const [editCategory, setEditCategory] = useState(null);

  const handleAddCategory = () => {
    if (editCategory) {
      // Update existing category
      setCategories(categories.map(cat => 
        cat.id === editCategory.id ? { ...cat, type: categoryType, description: categoryDescription } : cat
      ));
      setEditCategory(null);
    } else {
      // Add new category
      const newCategory = {
        id: Date.now(),
        type: categoryType,
        description: categoryDescription
      };
      setCategories([...categories, newCategory]);
    }
    setCategoryType('');
    setCategoryDescription('');
  };

  const handleEditCategory = (category) => {
    setEditCategory(category);
    setCategoryType(category.type);
    setCategoryDescription(category.description);
  };

  const handleDeleteCategory = (id) => {
    setCategories(categories.filter(category => category.id !== id));
  };

  const filteredCategories = categories.filter(category => 
    category.type.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Sidebar />
      <div className='container'>
        <h4>Cadastro de Categorias</h4>
        <div className='row'>
          <div className='input-field col s12'>
            <select 
              id='category_type' 
              value={categoryType} 
              onChange={(e) => setCategoryType(e.target.value)} 
              className='browser-default'
            >
              <option value='' disabled>Escolha uma categoria</option>
              <option value='Peça Moto'>Peça Moto</option>
              <option value='Peça Carro'>Peça Carro</option>
              <option value='Peça Caminhão'>Peça Caminhão</option>
              <option value='Outras Peças'>Outras Peças</option>
            </select>
           
          </div>
          <div className='input-field col s12'>
            <input 
              id='category_description' 
              type='text' 
              value={categoryDescription} 
              onChange={(e) => setCategoryDescription(e.target.value)} 
            />
            <label htmlFor='category_description' className={editCategory ? 'active' : ''}>Descrição da Categoria</label>
          </div>
          <div className='col s12'>
            <button className='btn waves-effect waves-light' onClick={handleAddCategory}>
              {editCategory ? 'Atualizar Categoria' : 'Adicionar Categoria'}
            </button>
          </div>
        </div>

        <h4>Filtrar Categorias</h4>
        <div className='row'>
          <div className='input-field col s12'>
            <input 
              id='filter' 
              type='text' 
              value={filter} 
              onChange={(e) => setFilter(e.target.value)} 
            />
            <label htmlFor='filter'>Filtrar por Nome</label>
          </div>
        </div>

        <h4>Listagem de Categorias</h4>
        <div className='row'>
          {filteredCategories.map(category => (
            <div className='col s12 m6 l4' key={category.id}>
              <div className='card'>
                <div className='card-content'>
                  <span className='card-title'>{category.type}</span>
                  <p>{category.description}</p>
                </div>
                <div className='card-action'>
                  <button className='btn-small blue' onClick={() => handleEditCategory(category)}>
                    Editar
                  </button>
                  <button className='btn-small red' onClick={() => handleDeleteCategory(category.id)}>
                    Excluir
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Home;
