import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

import getImages from './services/imageAPI';

import { Searchbar } from './Components/Searchbar/Searchbar';
import { Spinner } from './Components/Spinner/Spinner';
import { ImageGallery } from './Components/ImageGallery/ImageGallery';
import { Button } from './Components/Button/Button';
import { Modal } from './Components/Modal/Modal';

import { Container } from './App.styles';

class App extends React.Component {
    state = {
        page: 1,
        images: [],
        searchQuery: '',
        showModal: false,
        largeImage: '',
        isLoading: false,
        error: null,
    };

    componentDidUpdate(prevProps, prevState) {
        if (prevState.searchQuery !== this.state.searchQuery) {
            this.fetchImages();
        }

        if (prevState.page !== this.state.page) {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth',
            });
        }
    }

    handleFormSubmit = searchQuery => {
        this.setState({
            searchQuery: searchQuery.trim(),
            page: 1,
            images: [],
            isLoading: true,
            error: null,
        });
    };

    fetchImages = () => {
        const { page, searchQuery } = this.state;
        const options = { searchQuery, page };

        this.setState({
            isLoading: true,
        });

        getImages(options)
            .then(hits => {
                this.setState(prevState => ({
                    page: prevState.page + 1,
                    images: [...prevState.images, ...hits],
                    isLoading: false,
                }));

                if (hits.length > 0) {
                    toast.success('We have a picture for you!', {
                        position: 'bottom-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }

                if (hits.length === 0) {
                    toast.info('Picture is not found', {
                        position: 'bottom-right',
                        autoClose: 1000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
            .catch(error => {
                this.setState({
                    error,
                });

                toast.error('Error!', {
                    position: 'bottom-right',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
    };

    openModal = largeImageURL => {
        this.setState({
            showModal: true,
            largeImage: largeImageURL,
        });
    };

    toggleModal = () => {
        this.setState({
            largeImage: '',
            showModal: false,
        });
    };

    render() {
        const { images, showModal, largeImage, isLoading } = this.state;

        return (
            <Container>
                <Searchbar onSubmit={this.handleFormSubmit} />
                <>
                        {isLoading ===true && <Spinner />}
                        <>
                            <ImageGallery
                                images={images}
                                openModal={this.openModal}
                            />

                            {images.length > 0 && (
                                <Button onClick={this.fetchImages} />
                            )}
                        </>

                </>

                {showModal && (
                    <Modal onClose={this.toggleModal}>
                        <img src={largeImage} alt="" />
                    </Modal>
                )}
                <ToastContainer />
            </Container>
        );
    }
}

export default App;
