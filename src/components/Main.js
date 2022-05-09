import React from "react";
import useStyles from "./Main.styles";
import { Button, Grid, Group, Paper, Select } from "@mantine/core";
import { Dashboard, Developers, settings } from "./Data";
import Product from "./Product";

const Main = () => {
  const { classes } = useStyles();

  return (
    <Paper radius={0}>
      <Grid>
        <Grid.Col span={3} className={classes.side}>
          <div className={classes.logo}>
            <img src="logo.svg" alt="logo" />
          </div>

          <div className={classes.menu}>
            <span className={classes.span}>Dashboard</span>
            {Dashboard.map((item, index) => {
              return (
                <div className={classes.menuItem} key={index}>
                  <item.icon />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
          <div className={classes.menu}>
            <span className={classes.span}>Developers</span>
            {Developers.map((item, index) => {
              return (
                <div className={classes.menuItem} key={index}>
                  <item.icon />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
          <div className={classes.menu}>
            <span className={classes.span}>Settings</span>
            {settings.map((item, index) => {
              return (
                <div className={classes.menuItem} key={index}>
                  <item.icon />
                  <span>{item.name}</span>
                </div>
              );
            })}
          </div>
        </Grid.Col>

        <Grid.Col span={9}>
          <Group className={classes.header}>
            <Select
              placeholder="All Product"
              data={[
                { value: "AWS", label: "AWS" },
                { value: "IOT", label: "IOT" },
                { value: "Credit Card", label: "Credit Card" },
              ]}
            />

            <div>
              <Group spacing="xl">
                <Button variant="default" px={40}>
                  Import Products
                </Button>
                <Button variant="default" px={40} className={classes.btn}>
                  Create New Product
                </Button>
              </Group>
            </div>
          </Group>
          <Product />
        </Grid.Col>
      </Grid>
    </Paper>
  );
};

export default Main;
