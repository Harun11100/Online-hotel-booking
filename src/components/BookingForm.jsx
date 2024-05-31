
import { createClient } from '@supabase/supabase-js';
export const supabaseUrl = 'https://zjlcramtpiwmtygaonnp.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpqbGNyYW10cGl3bXR5Z2Fvbm5wIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTUwNzc2MjAsImV4cCI6MjAzMDY1MzYyMH0.AcHjsiG6w6D25FcyBjYn7G8YeDyylHa1F6csXh9DK3Y"
const supabase = createClient(supabaseUrl, supabaseKey)
import { useState } from 'react';
import styled from 'styled-components';
import { useSearchParams } from 'react-router-dom';



const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px;
  background-color: #e4d49e;
  font-family: "Poppins", sans-serif;
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 600px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  margin-bottom: 10px;
`;

const Label = styled.label`
  margin: 10px 0 5px;
`;

const Input = styled.input`
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #ffffff;
  color: #ffef5d;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background-color: #9c7b33;
  }
`;

const BookingForm = () => {
  const [searchParams] = useSearchParams();
  const cabinId = searchParams.get('cabinId');
  const price = searchParams.get('price');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    nationality: '',
    nationalID: '',
    startDate: '',
    endDate: '',
    numNights: 0,
    numGuests: 0,
    status: 'unconfirmed',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const guestData = {
      fullName: formData.fullName,
      email: formData.email,
      nationality: formData.nationality,
      nationalID: formData.nationalID,
    };

    try {
      // Insert guest data into the 'guests' table
      const { data: guestInsertData, error: guestInsertError } = await supabase
        .from('guests')
        .insert([guestData])
        .select();

      if (guestInsertError) {
        throw guestInsertError;
      }

      if (!guestInsertData || guestInsertData.length === 0) {
        throw new Error('No guest data returned after insert');
      }

      const guestId = guestInsertData[0].id;

      const bookingData = {
        startDate: formData.startDate,
        endDate: formData.endDate,
        numNights: formData.numNights,
        numGuests: formData.numGuests,
        cabinId: cabinId,
        status: formData.status,
        guestId: guestId,
        totalPrice: parseFloat(price), // Use the price from the query parameter
      };

      const { error: bookingInsertError } = await supabase
        .from('bookings')
        .insert([bookingData]);

      if (bookingInsertError) {
        throw bookingInsertError;
      }

      console.log('Booking Data:', bookingData);
      setFormData({
        fullName: '',
        email: '',
        nationality: '',
        nationalID: '',
        startDate: '',
        endDate: '',
        numNights: 0,
        numGuests: 0,
        status: 'unconfirmed',
      });
    } catch (error) {
      console.error('Error submitting booking:', error);
    }
  };
  return (
    <FormContainer>
      <h2>Booking Form</h2>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="fullName">Full Name</Label>
          <Input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">Email</Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="nationality">Nationality</Label>
          <Input
            type="text"
            id="nationality"
            name="nationality"
            value={formData.nationality}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="nationalID">National ID</Label>
          <Input
            type="text"
            id="nationalID"
            name="nationalID"
            value={formData.nationalID}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="startDate">Start Date</Label>
          <Input
            type="date"
            id="startDate"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="endDate">End Date</Label>
          <Input
            type="date"
            id="endDate"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="numNights">Number of Nights</Label>
          <Input
            type="number"
            id="numNights"
            name="numNights"
            value={formData.numNights}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="numGuests">Number of Guests</Label>
          <Input
            type="number"
            id="numGuests"
            name="numGuests"
            value={formData.numGuests}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <Button type="submit">Book Now</Button>
      </Form>
    </FormContainer>
  );
};

export default BookingForm;
