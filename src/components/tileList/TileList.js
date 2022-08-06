import React from "react";
import { Tile } from "../tile/Tile";

export const TileList = (props) => {
  return (
    <div>
          <Tile appointments={props.appointmentsList} contacts={props.contactsList} />
    </div>
  );
};
