import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
} from "@material-tailwind/react";



const AddForm = () => {
  return (
    <Card className="p-10 max-w-2xl mx-auto"
     color="transparent" shadow={true}>
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Nice to meet you! Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2">
        <div className="mb-1 flex flex-col gap-6">
        
          <Input
            size="lg"
            placeholder="name@mail.com"
          />
        
          <Input
            size="lg"
            placeholder="name@mail.com"
          />
          

        </div>

        <Button className="mt-6" fullWidth>
          sign up
        </Button>

      </form>
    </Card>
  )
}

export default AddForm