import { Swiper, SwiperSlide } from 'swiper/react';
import { convertC, convertF } from 'utils/converter';
import StyledWeek from './Week.styled';
import 'swiper/css';

interface Props {
    tempUnit: boolean,
    data: object,
}

function Week({ data, tempUnit }: Props) {
    return (
        <StyledWeek>
            {data && (
                <Swiper
                  allowSlidePrev
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
      && Object.values(data).map((day) => (
          <SwiperSlide key={day.weekday}>
              <div className="box_info">
                  <div>{day.weekday}</div>
                  <img
                    src={`assets/${day?.icon}.png`}
                    alt="weather icon"
                  />
                  <div className="temp_info">
                      <span>
                          {tempUnit
                  ? convertF(day.temp_max).toFixed(0)
                  : convertC(day.temp_max).toFixed(0)}
                          °
                          {' '}
                      </span>
                      <span> - </span>
                      <span className="light-text">
                          {tempUnit
                  ? convertF(day.temp_min).toFixed(0)
                  : convertC(day.temp_min).toFixed(0)}
                          °
                          {' '}
                          {tempUnit ? 'F' : 'C'}
                      </span>
                  </div>
              </div>
          </SwiperSlide>
      ))}
                </Swiper>
          )}
        </StyledWeek>
    );
}

export default Week;
