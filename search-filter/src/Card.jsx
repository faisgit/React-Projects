import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
   import SearchData from '../MOCK_DATA.json'
  export function Cards(props) {

   let displayData =  SearchData.filter(e => {
      if(props.searchTerm === ''){
        return e
      }
      else if (e.first_name.toLowerCase().includes(props.searchTerm.toLowerCase())) {
        return e
      }
   }).map(e =>  
      <Card className="mt-6 w-80 sm:w-96 md:w-[40rem] xl:w-[49rem] ">
        <CardBody>
          <Typography variant="h5" color="blue-gray" className="mb-2">
            {e.first_name} {e.last_name}
          </Typography>
          <Typography>
          Email: {e.email}
          </Typography>
          <Typography>
          Gender: {e.gender}
          </Typography>
        </CardBody>
      </Card>
      
      )

    return (
      <div className="flex flex-col items-center">
      {displayData}
      </div>
    );
  }