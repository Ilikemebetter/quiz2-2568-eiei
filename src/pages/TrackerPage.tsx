import { useState } from "react";
import { Button, Stack, Title, Divider, Container } from "@mantine/core";
import { v4 as uuidv4 } from "uuid";
//import type { FoodProps } from ".../components/FoodItem";
//import ItemCard from "../components/ItemCard";
import { TextInput } from '@mantine/core';

type FoodItem = {
  id: string;
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
};

export default function FoodTracker() {
  const [opened, setOpened] = useState(false);
  const [items, setItems] = useState<FoodItem[]>([]);
  const categories = ["Main Course", "Drink", "Dessert"];

  const AddFoodModal = () => {
    const newItem : FoodItem = {
      id: uuidv4(),
      //name: (),
      //price: FoodItem.price(),
     // quantity:FoodItem.quantity(),
      //category:FoodItem.category(),
    };
   setItems((prev) => [...prev, newItem]);
   };
  const computeTotalPayment = () => {
    let total = 0;
    let extratotal =0;
    total += extratotal;
    return total;
  };


  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Food Tracker
      </Title>
      <Button> Add Food Item </Button>
      <div>
        <label className="form-label" ></label>
        <TextInput
          label="Input label"
         // value={items}
        //  onChange={(event) =>setItems(event.currentTarget.value)}
          
        />
      </div>
 
      {/* Type additional AddFoodModal here. */}

      <Divider my="md" />
      
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {computeTotalPayment().toLocaleString()} Baht</Title>
      <Stack my="sm">   
         Main Course:{} Baht
         Drink:{} Baht 
         Dessert:{} baht </Stack>

      <Divider my="md" />
      {/* Type additional card here. */}

      <Stack>{/* Type additional food card list here. */}</Stack>


    </Container>
  );
}
