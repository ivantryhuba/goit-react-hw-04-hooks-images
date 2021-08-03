import React from 'react';
import PropTypes from 'prop-types';

import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';

import { ImageGalleryList } from './ImageGallery.styles';

export const ImageGallery = ({ images, openModal }) => {
    return (
        <ImageGalleryList>
            {images.map(({ id, webformatURL, largeImageURL, tags }) => (
                <ImageGalleryItem
                    key={id}
                    imageUrl={webformatURL}
                    tags={tags}
                    largeImageURL={largeImageURL}
                    openModal={openModal}
                />
            ))}
        </ImageGalleryList>
    );
};

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.object).isRequired,
    openModal: PropTypes.func.isRequired,
};