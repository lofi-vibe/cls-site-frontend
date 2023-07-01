"use client"
import React from 'react'
import {
    Card,
    Typography,
    List,
    ListItem,
    ListItemPrefix,
    ListItemSuffix,
    Chip,
  } from "@material-tailwind/react";
import { docsNavLinks } from "../constants";

const Sidebar = () => {
    return (
        <Card className="w-64 h-screen overflow-auto shadow-xl shadow-blue-gray-900/5 relative">
          <div className="mb-2 p-4">
            <Typography variant="h5" color="blue-gray">
              Documentation
            </Typography>
          </div>
          <List>
            {docsNavLinks.map((link, index) => {
              const { icon: Icon } = link;
              return (
                <ListItem key={link.text}>
                  <ListItemPrefix>
                    <Icon className="h-5 w-5" />
                  </ListItemPrefix>
                  {link.text}
                  {link.badge && (
                    <ListItemSuffix>
                      <Chip value={link.badge} size="sm" variant="ghost" color="blue-gray" className="rounded-full" />
                    </ListItemSuffix>
                  )}
                </ListItem>
              );
            })}
          </List>
        </Card>
      );
}

export default Sidebar

