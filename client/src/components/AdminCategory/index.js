import React from "react";
import ReactDOM from 'react-dom'
import { useMutation } from '@apollo/client';
<<<<<<< HEAD
import { ListGroup, InputGroup, FormControl, Form, Button, Container, Row, Col} from 'react-bootstrap';
import { EDIT_CATEGORY, REMOVE_CATEGORY } from '../../utils/mutations';
=======
import { ListGroup, InputGroup, FormControl, Form, Button} from 'react-bootstrap';
import { EDIT_CATEGORY } from '../../utils/mutations';
>>>>>>> alan

const SubcategoryFormSelect = (props) =>
{
    const subCategoryId = props.subcategory ? props.subcategory._id : props.category;
  
    const handleDeleteSubcategory = (event) =>
    {
<<<<<<< HEAD
        event.target.parentNode.parentNode.parentNode.remove();
    }
    return (
        <React.Fragment>
            <Row sm={12} className="p-0 m-0 pb-1">
                <Col sm={10} className="p-0">
                    <Form.Select name="subcategories" key={subCategoryId} id={props.category} defaultValue={subCategoryId} className="m-0">
                    {props.categories.map(listCategory => 
                        {
                            //Don't show the parent Category
                            if(listCategory._id !== props.category)
                            {
                                let hide = false;
                                props.subCategories.forEach(subcategory => 
                                    {
                                        //Don't show options that other subcategories are set to
                                        if(subcategory._id === listCategory._id && subcategory._id !== subCategoryId)
                                        {
                                            hide = true;
                                        }
                                    })
                                if(hide)
                                    return null;
                                return (<option key={listCategory._id} value={listCategory._id}>{listCategory.name}</option>)
                            }
                            return null;
                        }
                    )}
                    </Form.Select>
                </Col>
                <Col sm={2} className="ps-1">
                    <Button variant="danger" onClick={handleDeleteSubcategory} className="m-0">Remove</Button>
                </Col>
            </Row>
=======
        event.target.parentNode.remove();
    }
    return (
        <React.Fragment>
            <Form.Select name="subcategories" key={subCategoryId} id={props.category}>
            {props.categories.map(listCategory => 
                {
                    //Don't show the parent Category
                    if(listCategory._id !== props.category)
                    {
                        let hide = false;
                        props.subCategories.forEach(subcategory => 
                            {
                                //Don't show options that other subcategories are set to
                                if(subcategory._id === listCategory._id && subcategory._id !== subCategoryId)
                                {
                                    hide = true;
                                }
                            })
                        if(hide)
                            return null;
                        return (listCategory._id === subCategoryId) ?
                            <option key={listCategory._id} id={listCategory._id} selected>{listCategory.name}</option> :
                            <option key={listCategory._id} id={listCategory._id}>{listCategory.name}</option>
                    }
                    return null;
                }
            )}
            </Form.Select>
            <Button variant="danger" onClick={handleDeleteSubcategory}>Remove</Button>
>>>>>>> alan
        </React.Fragment>
    )
};

const AdminCategory = (props) =>
{
    const [editCategory] = useMutation(EDIT_CATEGORY);
<<<<<<< HEAD
    const [removeCategory] = useMutation(REMOVE_CATEGORY);

    const handleSaveCategory = async (event) =>
    {
        const { value, id } = event.target.parentNode.children[0].children[0].children[1].children[0];
        const subCategoryElements = event.target.parentNode.children[1].children[0].children[1].children;
        console.log(event)
        console.log(subCategoryElements)
        let subcategories = new Set();
        if(subCategoryElements.length > 1)
        {
            for(let i = 0; i < subCategoryElements.length; i++)
            {
                console.log(subCategoryElements[i].children[0].children[0])
                if(subCategoryElements[i].children[0].children[0].children[0].selectedOptions)
                    subcategories.add(subCategoryElements[i].children[0].children[0].children[0].selectedOptions[0].id);
=======

    const handleSaveCategory = async (event) =>
    {
        const { value, id } = event.target.parentNode.children[0].children[1];
        const subCategoryElements = event.target.parentNode.children[1].children;
        let subcategories = new Set();
        console.log(subCategoryElements)
        if(subCategoryElements.length > 1)
        {
            for(let i = 1; i < subCategoryElements.length - 1; i++)
            {
                if(subCategoryElements[i].children[0].selectedOptions)
                    subcategories.add(subCategoryElements[i].children[0].selectedOptions[0].id);
>>>>>>> alan
            }
        }
        try
        {
            await editCategory({ variables: { editCategoryId: id, editCategoryName: value, editCategorySubcategories: Array.from(subcategories) } });
<<<<<<< HEAD
            window.location.reload();
=======
>>>>>>> alan
        }
        catch (e)   
        {
            console.log(e);
        }
    };
<<<<<<< HEAD
    
    const handleDeleteCategory = async (event) =>
    {
        const { id } = event.target.parentNode.children[0].children[1];
        await removeCategory({ variables: { removeCategoryId: id } });
        window.location.reload();
    };

    const handleAddSubcategory = (event) =>
    {
        const parentNode = event.target.parentNode.children[1].children[0].children[1];
        const container = document.createElement("div");
        container.id = parentNode.id;
        parentNode.append(container);
=======

    const handleAddSubcategory = (event) =>
    {
        const parentNode = event.target.parentNode;
        const container = document.createElement("div");
        container.id = parentNode.id;
        parentNode.insertBefore(container, event.target);
>>>>>>> alan
        let subcategories = [];
        props.categoryData.categories.forEach(category =>
        {
            if(category._id === parentNode.id)
            {
                subcategories = category.subcategories;
            }
        });
        ReactDOM.render(<SubcategoryFormSelect category={parentNode.id} categories={props.categoryData.categories} subCategories={subcategories}/>, container);
<<<<<<< HEAD
    };    

    return (
        <Container fluid>
            <ListGroup>
                {props.categoryData.categories.map((category) => (
                    <ListGroup.Item key={category._id} className="mb-1 border-3">
                        <Row className="mb-1">
                            <InputGroup>
                                <Col sm={2} className="me-1 p-0">
                                    <InputGroup.Text >Name:</InputGroup.Text>
                                </Col>
                                <Col sm={8}>
                                    <FormControl className="m-0" type="text" placeholder="Name" name="name" id={category._id} defaultValue={category.name}></FormControl>
                                </Col>
                            </InputGroup>
                        </Row>
                        <Row className="mb-1">
                            <InputGroup >
                                <Col sm={2} className="me-1">
                                    <InputGroup.Text >Subcategories:</InputGroup.Text>
                                </Col>
                                <Col sm={8} id={category._id}>
                                {(category.subcategories.length > 0) ?
                                    category.subcategories.map((subcategory) => (
                                        <div key={subcategory._id} >
                                            <SubcategoryFormSelect subcategory={subcategory} category={category._id} categories={props.categoryData.categories} subCategories={category.subcategories} />
                                        </div>
                                    ))
                                    : null}
                                </Col>
                            </InputGroup>
                        </Row>
                        <Button as={Col} sm={2} type="submit" onClick={handleAddSubcategory} className="me-1">Add Subcategory</Button>
                        <Button as={Col} sm={2} type="submit" onClick={handleSaveCategory} className="me-1">Save Category</Button>
                        <Button as={Col} sm={2} type="submit" variant="danger" onClick={handleDeleteCategory} className="me-1">Delete Category</Button>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
=======
    };

    return (
        <ListGroup>
            {props.categoryData.categories.map((category) => (
                <ListGroup.Item key={category._id}>
                    <InputGroup>
                        <InputGroup.Text>Name:</InputGroup.Text>
                        <FormControl type="text" placeholder="Name" name="name" id={category._id} defaultValue={category.name}></FormControl>
                    </InputGroup>
                    <InputGroup id={category._id}>
                        <InputGroup.Text>Subcategories:</InputGroup.Text>
                        {(category.subcategories.length > 0) ?
                            category.subcategories.map((subcategory) => (
                                <div key={subcategory._id} >
                                    <SubcategoryFormSelect subcategory={subcategory} category={category._id} categories={props.categoryData.categories} subCategories={category.subcategories} />
                                </div>
                            ))
                            : null}
                        <Button type="submit" onClick={handleAddSubcategory}>Add Subcategory</Button>
                    </InputGroup>
                    <Button type="submit" onClick={handleSaveCategory}>Save Category</Button>
                </ListGroup.Item>
            ))}
        </ListGroup>
>>>>>>> alan
    );
};

export default AdminCategory;