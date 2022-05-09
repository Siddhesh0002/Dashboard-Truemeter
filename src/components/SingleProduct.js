import {
  Tooltip,
  Divider,
  Grid,
  Group,
  Modal,
  Switch,
  Text,
} from "@mantine/core";
import React, { useState } from "react";
import useStyles from "./Main.styles";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const SingleProduct = ({ item }) => {
  const { classes } = useStyles();
  const [opened, setOpened] = useState(false);

  return (
    <div className={classes.single}>
      <Grid align="center" justify="center" gutter={20}>
        <Grid.Col span={5} className={classes.left}>
          <div className={classes.innerLeft}>
            <Text color="#999999">Product Name</Text>
            <Text>{item.product_name}</Text>
          </div>
          <div className={classes.bottomLeft}>
            <Text color="#999999">Product Features</Text>
            <Text>{item.product_features}</Text>
          </div>
        </Grid.Col>
        <Grid.Col span={5}>
          <div className={classes.innerLeft}>
            <Text color="#999999">Billable Metric Name</Text>
            <Text>{item.billable_metric_name}</Text>
          </div>
          <div className={classes.bottomLeft}>
            <Text color="#999999">Product Plan SKU count</Text>
            <Text>{item.sku_count}</Text>
          </div>
        </Grid.Col>

        <Grid.Col span={2}>
          <Group>
            <Tooltip
              wrapLines
              width={220}
              position="bottom"
              withArrow
              transition="fade"
              transitionDuration={200}
              label="Change status of Product for active or inactive"
            >
              <Switch color="teal" size="xs" />
            </Tooltip>
            <FaEdit size={20} />
            <button
              onClick={() => setOpened(true)}
              className={classes.btnGroup}
            >
              <MdDelete size={20} />
            </button>
          </Group>
        </Grid.Col>
      </Grid>
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
        centered
        title={`Are you sure you want to delete ${item.product_name} Product?`}
      ></Modal>
      <Divider size="xs" className={classes.divider} />
    </div>
  );
};

export default SingleProduct;
