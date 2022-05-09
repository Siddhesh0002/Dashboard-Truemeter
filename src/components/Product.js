import { Grid, Paper, Text, TextInput } from "@mantine/core";
import React from "react";
import useStyles from "./Main.styles";
import { FiSearch } from "react-icons/fi";
import { MdSkipNext, MdSkipPrevious } from "react-icons/md";
import data from "./Data";
import SingleProduct from "./SingleProduct";

const Product = () => {
  const { classes } = useStyles();

  return (
    <div className={classes.product}>
      <Grid>
        <Grid.Col span={2}>
          <Text className={classes.title}>Product List</Text>
        </Grid.Col>
        <Grid.Col span={3} offset={7}>
          <TextInput
            placeholder="Search By Product"
            rightSection={<FiSearch size={20} />}
          />
        </Grid.Col>
      </Grid>
      <Paper
        className={classes.container}
        my={50}
        classNames={classes.pcontainer}
      >
        {data.items.map((item, index) => (
          <SingleProduct item={item} key={index} />
        ))}
      </Paper>
      <div className={classes.bottom}>
        <Text>Showing 1-3 of 3</Text>
        <button>
          <MdSkipPrevious />
        </button>
        <button>
          <MdSkipNext />
        </button>
      </div>
    </div>
  );
};

export default Product;
