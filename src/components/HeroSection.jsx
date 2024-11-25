import React from 'react';
import { Carousel, Button, Typography } from 'antd';

const { Title, Paragraph } = Typography;

const slides = [
    {
        key: 1,
        title: 'Premium Bed Sheets',
        description: 'Discover luxury and comfort with our premium bed sheets collection.',
        imageUrl: 'https://img.freepik.com/free-photo/bed-arrangements-still-life_23-2150533005.jpg?t=st=1730147766~exp=1730151366~hmac=02491336f9177bc49f8160fc245f94aab0666a677ec0ee1e73aa8c0058d4e63d&w=1380',
        buttonText: 'Shop Now',
    },
    {
        key: 2,
        title: 'Elegant Duvet Covers',
        description: 'Add elegance to your bedroom with our exclusive duvet covers.',
        imageUrl: 'https://img.freepik.com/free-photo/room-interior-design_23-2148899460.jpg?t=st=1730147823~exp=1730151423~hmac=b0a82e3f4d8b3b43512517c3d534166729c71f644a10cf5cccc512760c3e6690&w=1380',
        buttonText: 'View Collection',
    },
    {
        key: 3,
        title: 'Soft Pillow Cases',
        description: 'Experience a restful sleep with our soft and stylish pillow cases.',
        imageUrl: 'https://img.freepik.com/free-photo/double-bed-with-pillows_1203-117.jpg?t=st=1730147839~exp=1730151439~hmac=a78dc36ce5a1a7c2de836332c3207a0ac0f93e3917807ef95a32ce6209ffd3f5&w=1380',
        buttonText: 'Explore More',
    },
];

const HeroSection = () => {
    const onChange = (currentSlide) => {
        console.log('Current slide:', currentSlide);
    };

    return (
        <Carousel afterChange={onChange} autoplay>
            {slides.map((slide) => (
                <div key={slide.key} className="carousel-slide">
                    <img
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="carousel-image"
                    />
                    <div className="carousel-content">
                        <Title level={1} className="carousel-title">{slide.title}</Title>
                        <Paragraph className="carousel-description">{slide.description}</Paragraph>
                        <Button type="primary" size="large" className="carousel-button">{slide.buttonText}</Button>
                    </div>
                </div>
            ))}
        </Carousel>
    );
};

export default HeroSection;
