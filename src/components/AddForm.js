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
import * as Yup from 'yup';



const AddForm = () => {

  const valSchema = Yup.object({
    title: Yup.string().required('This is required'),
    detail: Yup.string().required(),
    place: Yup.string().required(),
    country: Yup.string().required(),
    times: Yup.array().min(1, 'Atleast one item should be chosen').required(),
    imageFile: Yup.mixed().test('fileType', 'Invalid file type', (value) => {
      return value && ['image/jpg', 'image/png', 'image/jpeg'].includes(value.type);
    }).test('fileSize', 'file too large', (value) =>
    value && value.size <= 4 * 1024 *1024)
    
  });

const formik = useFormik({
  initialValues: {
    title: '',
    detail: '',
    place: '',
    country: '',
    times: [],
    imageFile: null,
    imageUrl: ''
  },
  onSubmit:(val) => {
    console.log(val);
  },
  validationSchema: valSchema
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

          <div>
           <Input
               onChange={formik.handleChange}
               size="lg"
               label="Title"
               type="text"
               name="title"
               value={formik.values.title}
            />
            {formik.errors.title && formik.touched.title &&
            <h1 className="text-red-400 mt-2">{formik.errors.title}</h1>}
          </div>
        
          
        
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
            {formik.errors.times && formik.touched.times &&
            <h1 className="text-red-400 mt-2">{formik.errors.times}</h1>}   
          </div>

          <div className="w-72">
            <Select
             onChange={(e) => formik.setFieldValue('country',e)} 
             label="Select Country">
              <Option value="nepal">Nepal</Option>
              <Option value="india">India</Option>
              <Option value="china">China</Option>
            </Select>
            {formik.errors.country && formik.touched.country &&
            <h1 className="text-red-400 mt-2">{formik.errors.country}</h1>}
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

            {formik.errors.imageFile && formik.touched.imageFile &&
            <h1 className="text-red-400 mt-2">{formik.errors.imageFile}</h1>}

             {formik.values.imageUrl && !formik.errors.imageFile &&   <div className="pt-5">
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