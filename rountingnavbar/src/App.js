import logo from './logo.svg';
import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Homepage from './Homepage';
import About from './About';
import logoLemon from './assets/images/logo.png'
import ReactPlayer from 'react-player'

function App() {
  const vidUrl = 'https://www.youtube.com/watch?reload=9&v=H40AmUXAEFM&ab_channel=%D8%B9%D8%A8%D8%AF%D8%A7%D9%84%D8%B3%D9%85%D9%8A%D8%B9%D8%A7%D9%84%D8%B4%D9%8A%D8%AE'

  return (
    <div className='App'>
      <nav>
        <Link to="/" className='nav-item'>Homepage</Link>
        <Link to="/about-me" className='nav-item'>About Me</Link>
      </nav>
      <Routes>
        <Route path='/' element = {<Homepage/>} />
        <Route path='/about-me' element = {<About/>} />
      </Routes>
      <img height={200} src={logoLemon}/>
      <img height={200}
        src={require("./assets/images/logo.png")}
        alt='logo img'
      />
      <img 
        src={'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJAAcwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAEBQADAQIGB//EADgQAAIBAgQEAwYFAgcBAAAAAAECAwARBBIhMQUiQVETYXEGFIGRofAyQrHB4TPRBxUjUmJy8VP/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMABAX/xAAfEQACAgIDAQEBAAAAAAAAAAAAAQIRAxITIUEEMVH/2gAMAwEAAhEDEQA/APa0NWCqENWqaIEWVKwKzQCSpUqVjEqVKlYxKlSpWMSpUrBrGME1Uxqxqpc0UBmpOtYrUnWpRFMoavQ1zg4rnIZGAHlR2D4iWP8AqEZe9M4MRZExyDWbgbmlk+NAymGRSOottQjyl2JYlvWgoWNLIkPVZW/CwPoa0lmEY2LHsKSxyNGwZGsRVxxRJDBbMOt96PGLyjSGYSrmsR61YGB2IpS2MZlCta1VGZQllzK3Qg2raMPKhy0irua1E6HrSBmk/wBx+dah5Ab5jTcQnM/4dGJFPWs3vSfD4oA2mBA7irZcfGhtGM477Ujg7HWRVbGDGqZDQXvkT7EA+dUyYm2zUdGB5EGE61KVnGG+/wBazR0YORHnOGxcyWKMQB0vTnB8VcDnJN+ormony25wR070dA6k6jKa6f05mqOrix+caMKITGHvXPYZwLWYUdHMDZSDfvQpA7HS4q9We8gbnWliyqFstye5FC8Rx8PDsG+MxZZYUtcqpbc2GnqaFDK/Cv2347ieFcKSfBlQzuULFb2Fumv3akf+H3tLjOI8Wmw+KkZleNpCDqARYb9L32rmfar2pwfGhHGmFfw475XZyL3t0HpW/wDh1iMBFx0g+8JiJUKwi90J3PS+w61z6XO7O5NLDTXh7N4inrWcw70mOJdTuanvptY10aM4NkNyw71U7Ut99PQ1n3y4sTrR1ZtkEyOKFll/5GqpMTpQc2JtWSAwkzvf8dSlpxQvvUpqFs4mETG3MaPj8ddVc69DWcLNhZGyrKpYdLU1w8MDgcy0vIiriyjDjEkhS/yNHwRShtS3zo2CCBfzptc60ThJ+HyS+HHi8Ozg2yiQXvQeVA42ymCF11B1pP7Se0K4aGXCRiKSQ/6cxcZgtwOW3ex+tdmsUJsPFjuT/uFeKe0mK8T2n4g6kFPGJVdxoAAfPQUHkTKY8TF0mBXPyEhe3amHB7YDGJPDP4Mqn+rryfKqEkzE3J+NVYjK12zW6N5itSXaLNt9M9F4L7UHiHElwMpSV2DWkVStyOtj3HptXQtE1r7+lePez2MOB43hMVe/hTIWI6rsfoTXvwhwwAOdMpGhvQ5OiU8NM559NMpv8apYkA3RvnXSSQ4W1/ET1zCh5IsLbV1+Yo8qJ8TOcebL1PxFDyy3BIBPoaf4iHBm/Mv0pbPDg9R4g0F9K3IjcchMZDf8DVKO8PBn87fKpR3RtGc1heHRw4rx0zai2Vtv1p1h7qP3AArm4sVMVPOxYH8xplFj5I4hzEvrsO1eJKTPeUUPx4hjZAwsQRex0vSbgfsqcDjVxT8RZ3BvYRWB+tCf53O7mMZwwNrCj4uIzkXDN03O1I8kkOscWdNKkBKSENeMcvO2n1tXiLSB8Tn1sza21vXqa4jFzwlQpLMCCBpavLo8LJHjWwz8kkTFT0sRXT8ktm0Q+mOqTN/E1YgnfrVUjkmrMVGkBEaPmbdzfQHsP70Peu5vw5Ir02hIVg17EHa1es8JSfinBcFMeK4yHPCLrEIumlrlCenevItq9f8AZV1j9n+HJkUgYdTvrci5/WuT6ZVFHTgjcmGnBsYHgmx2ImRwQwkCagi1tFFaCGSGKOJJrJHtZBcjsaLedL6DbcXoaXEwdW+F641KzpcaFmOwRmnaU4zEqxABCOAAPIW0oZ43U394dtPzhT+1FT43D3uGfysKFkkSTXxG16EUyYlFOZ//AKD5CpWhaIGxkPyrNOYSRYV9FVrBQCDfc69fWivdZVN5M39IISuw11rMcpLXGvby6fvRsEnKFIBzDr3pZSCogKxNDM6LGAgW4Zuvl8zRUa4tW0jWxIC9bUfEsTrZtQxG/SxuKOh8NrhWKkjlINrdKm6H7AGlxcSqFfmBGa/Y1y/GopEx7zFM0j4e7FV6g83y0+dd+I4pLh0zFjctbp1oXisGF/yzFc0adbkDlJ/ijhycc7RskOSNM8pYM8gVRqTlAHetGRlRXKkI18pPW29OsRhRBxDBlmIKzKuQC9rFTYDqdde5NaTQRtJArxiNYIypRuhzsfU6EV6HLfZxrHQmys7BFF2bRR3PSvWcDA6rHCpISJAnbYUq4FwTA4yLD8QnizSxOcljZTbYkDfaui8NVNla2g29K4voyLJ0jqww07ZWYpCb58oO9jqfKq8QF2XLp0tW8t0vlffcnpelkzOxW3MNNb1FRZRtFLqzEkLYC9qF1N2LgHyqzFSyJlsDYsV01t60uaWR8xzaBbnz00qqiybaMvECxOY/M1KHSYFAe/8AyqU9MW0V4SYrMtwVyLv32/imImuMtypK70lw0isGLnV9Fv0A+xW8krQYkZjmucx9Lj+xrSjZoyOhaVUQREt/3FF4TEFiSBmA6jpc7UmVvFjZw1szWBPwovD4kxNMHyhb5hbT761BoqmORjwrZQNPwjTba1U8QkjxOBdAocBSQoP4m6UkxGKWONxIwDEbnqSP/aYxLGkcMagucoP4iAB0ufkKWu0xr8EmAQv7R4ZsSqq6g99DY5d9trjrrWvFMIYsdO8URjUyHIRoCD1v9ijYsmFR8S1nmnJLsGNi19h8DvU4vlaUR2DWdGIY276fSrqbciTjUR5wCQQcOgR9CbsbnexvR0k4Uhs176jyG37VzHv6x4+CANljjiCMV0tverIseZwUzAMg9b2A6+tTcXbZRSX4O2nV1ZRZWuDe/WhMUyMTla2up+lK/eyCQJLgXOUg6i16w85I0Juuo1v96WpkmI6CXbM2pbU3IHrQDxKBJa5U2+Xas4jFgMGSwAPUUNLiy0vhqAAFv8dLVSNiSLyig2VUA6aVKG8YndwD2qU/ZOhTAQBmOtjc6bKatZ0ZhMDchSAO5vf+KCEjMXBsoygW8qwlsup5cx+A0qjiKpDPB4vwy+e55rgHvfSj8JiSJFEpJ5rAnWkRYuysoFhWwxBEia6KQPjUpY7KRyUdC2Njlljzi4/Nc7C+l62GMMuIuj2GYtfvYGw+tJfe15lIzFiFN+wNW4SZAY/EGbO4zG9rC+1TeOiinY1kw6yRYfD57kkFt72uNL/D70rD4mGRg4QuUAs1t2vYG3l97VXHL4+NkkJVCAxHnpp8aXZpYp2Y/wBIOSxtoSL60sYv0MpdFyMrowlULiOYDXvvfsNav4fkOKSaUZVZjGb/ABsdfT9KFdoh4g5mZlsSVt2ocTeFIHJUBdSN9b72+9qolZNui5ZWWWPR7G9xbW2tXx4geFNJfmXlFjuO/wC1LppSkwjt+AEA9yR/NViZI4M2tywBF+gvVNBNgyeUsVsdxff7+zQ5kzEm5vYmhWlJZbbDQehqyWTwnuCCGFh8xTqNCuRes4IuTrUpY7AubXHxqUdQbEUkKxI/EKgYWUdAb1qoul7/AArGlOKERSBTl771m4V5BuRoKHFrE+YrYayHrdhQoNlyyLte7XubdO1WwyFrE7jlHreh7DLIyg6mw8quwVvGU789yB2GtKwp9l4nkzhlfmJt6CtoY5PGAJ5rFj1tbtQ2GKssitfKzD4HYUbiJfCjJU3mIb0Av/NI14Mn6VO1goLW8TfuB93rTEFTEGXqbMo22/TeqhMHHPqQuWx7fd60RiAx6HSmUaFciyeS7LId9De3W9aTljcC7DNc3N60kdsuRWI12FEchEgJvbr5UwARH5s17BdbVl3uiW6VXplrHT409AIW1NStalYx/9k='}
      />
      <ReactPlayer url={vidUrl} playing={false} volume={0.5} controls={true}/>
    </div>
  )
}

export default App;
