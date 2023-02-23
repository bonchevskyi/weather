import { Swiper, SwiperSlide } from 'swiper/react';
import { convertC, convertF } from 'utils/converter';
import { WeatherIT } from 'types';
import StyledToday from './Today.styled';
import 'swiper/css';

interface Props {
    data: WeatherIT,
    tempUnit: boolean,
}

function Today({ data, tempUnit }: Props) {
    return (
        <StyledToday>
            <Swiper
              spaceBetween={20}
              slidesPerView={2}
              breakpoints={{
        // when window width is >= Xpx
        640: {
          width: 640,
          slidesPerView: 4,
        },
        768: {
          width: 768,
          slidesPerView: 5,
        },
        991: {
          width: 991,
          slidesPerView: 6,
        },
        1024: {
          width: 1024,
          slidesPerView: 6,
        },
      }}
            >
                {data
        && [data].map((item) => (
            <SwiperSlide key={item.dt}>
                <div className="box_info">
                    <div>
                        {new Date(item.dt * 1000).toLocaleString('en-US', {
                  hour: 'numeric',
                  minute: 'numeric',
                  hour12: false,
                })}
                    </div>
                    <img
                      src={`assets/${
                  item.weather[0].icon
                   }.png`}
                      alt="weather icon"
                    />
                    <div className="temp_info">
                        <span>
                            {tempUnit
                    ? convertF(item.main.temp).toFixed(0)
                    : convertC(item.main.temp).toFixed(0)}
                            °
                            {' '}
                            {tempUnit ? 'F' : 'C'}
                        </span>
                    </div>
                </div>
            </SwiperSlide>
        ))}
            </Swiper>
        </StyledToday>
    );
}

export default Today;
