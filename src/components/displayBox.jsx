import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./displayBox.css";
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import sunnyImg from "../assets/sunnyImg.jpg";
import winterImg from "../assets/winterImg.jpg"
import rainyImg from "../assets/rainyImg.webp"

export default function DisplayBox({ourWeather}){


    // let sunnyImg = "https://media.istockphoto.com/id/1007768414/photo/blue-sky-with-bright-sun-and-clouds.jpg?s=612x612&w=0&k=20&c=MGd2-v42lNF7Ie6TtsYoKnohdCfOPFSPQt5XOz4uOy4=";
    // let winterImg = "https://files.nc.gov/osfm/images/2021-12/Winter%20Weather%20Preparedness.jpg?VersionId=I1NigSLeNgkDp.qBaSN.izemMXEdVraq";
    // let rainyImg = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSilnfC9x8lVuce1IKPctYLTLjVnD2jtXjq2A&s";

    return(
        
    <div className='Card'>
        {ourWeather.temp&&
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={ourWeather.humidity>80? rainyImg: ourWeather.temp> 15 ? sunnyImg: winterImg}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {ourWeather.location} {ourWeather.humidity>80? <ThunderstormIcon/>: ourWeather.temp> 15 ? <SunnyIcon/>: <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
        <div className='Information'>
          <p>Temperature  = {ourWeather.temp}&deg;C</p>
          <p>Humidity = {ourWeather.humidity}</p>
          <p>Min Temp = {ourWeather.temp_min}&deg;C</p>
          <p>Max Temp = {ourWeather.temp_max}&deg;C</p>
          <p>The weather is described as {ourWeather.weather} and feels like {ourWeather.feels_like}&deg;C</p>
        </div>
        </Typography>
      </CardContent>
      
    </Card>
        }
        </div>
    )
}