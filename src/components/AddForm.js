import {
  Card,
  Input,
  Checkbox,
  Button,
  Typography,
  Radio,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import { useFormik } from "formik";



const AddForm = () => {

const formik = useFormik({
  initialValues: {
    title: '',
    detail: '',
    place: '',
    country: '',
    times: [],
    imageFile: null,
    imageUrl: ''
  }
});

const radioData = [
  {label:'Home', color:'red'},
  {label:'Online', color:'blue'},
];
const checkData = [
  {label:'Morning', color:'orange'},
  {label:'Afternoon', color:'blue'},
  {label:'Evening', color:'gray'},
];


  return (
    <Card className="py-5 px-10 max-w-xl mt-7 border-[1px] border-gray-700 mx-auto"
     color="transparent" shadow={true}>
      <Typography variant="h4" color="blue-gray">
        Add Your Daily Blogs
      </Typography>
      
      <form onSubmit={formik.handleSubmit} className="mt-4 mb-2">
        <div className="mb-1 flex flex-col gap-6">
        
          <Input
          onChange={formik.handleChange}
            size="lg"
            label="Title"
            type="text"
            name="title"
            value={formik.values.title}
          />
        
          <Textarea
            //  size="lg"
            label="Detail"
            type="text"
            name="detail"
            value={formik.values.detail}
            onChange={formik.handleChange}
          />

          

          <div>
            <Typography variant="h5" color="purple">Choose The Place</Typography>

            <div className="flex w-max gap-4">
              {radioData.map((rad, i) => {
                return <Radio 
                onChange={formik.handleChange}
                value={rad.label}
                 key={i}
                 name="place" 
                 label={rad.label} 
                 color={rad.color} />
              })}

            </div>  

          </div>
          <div>
            <Typography variant="h5" color="cyan">Pick The Time</Typography>

            <div className="flex w-max gap-4">
            {checkData.map((check, i) => {
                return <Checkbox 
                onChange={formik.handleChange}
                 key={i}
                 value={check.label}
                 name="times"
                  label={check.label}
                  color={check.color} />
              })}
            </div>    
          </div>

          <div className="w-72">
            <Select
             onChange={(e) => formik.setFieldValue('country',e)} 
             label="Select Country">
              <Option value="nepal">Nepal</Option>
              <Option value="india">India</Option>
              <Option value="china">China</Option>
            </Select>
          </div>

          <div>
            <Typography>Select Image</Typography>
            <Input
            onChange={(e) => {
              const file = e.target.files[0];
              formik.setFieldValue('imageFile', file);
              const reader = new FileReader();
              reader.readAsDataURL(file);
              reader.addEventListener('load', (e) => {
               formik.setFieldValue('imageUrl', e.target.result);
              })
            }}
            size="lg"
            label="Image"
            type="file"
            name="openFile"
            accept="image/*"
             />

             {formik.values.imageUrl && <div className="pt-5">
              <img className="h-[200px]" src={formik.values.imageUrl} alt="" />
             </div> }


          </div>
          

        </div>

        <Button type="submit" className="mt-6" fullWidth>
          sign up
        </Button>

      </form>
    </Card>
  )
}

export default AddForm