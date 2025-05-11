'use client'
import React, { useState, useEffect } from 'react';
import { getVendorAdmin } from '../../actions/getVendorAct';
import { DeleteVendor } from '../../actions/deleteVendor';
import { FaTrash } from 'react-icons/fa';
import { getVendorPro } from '../../actions/getVendorPro';
import Image from 'next/image';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
} from '@mui/material';

const VendorList: React.FC = () => {
  const [vendor, setVendor] = useState<any>([]);
  const [search, setSearch] = useState('');
  const [filteredVendors, setFilteredVendors] = useState<any>([]);
  const [showProducts, setShowProducts] = useState<boolean>(false);
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    const response = await getVendorAdmin();
    setVendor(response?.vendors);
  };

  useEffect(() => {
    setFilteredVendors(
      vendor.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, vendor]);

  const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const handleSearchSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSearch(e.target.value);
  };

  const GetPro = async (id: any) => {
    const response = await getVendorPro(id);
    setProducts(response.products);
    setShowProducts(true);
  };

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold leading-tight mt-0 mb-2 text-center">
          Vendors List
        </h1>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <TextField
            label="Search vendor"
            variant="outlined"
            value={search}
            onChange={handleSearchInput}
            className="w-full md:w-1/2"
          />
          <div className="relative w-full md:w-1/2 mt-4 md:mt-0">
            <select
              className="appearance-none border-2 border-gray-500 p-2 rounded-md w-full"
              value={search}
              onChange={handleSearchSelect}
            >
              <option value="">Select Vendor</option>
              {vendor.map((item) => (
                <option key={item.id} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className="overflow-x-auto h-120">
          {!showProducts ? (
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 950 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredVendors.map((item: any) => (
                    <TableRow
                      key={item.id}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {item.name}
                      </TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>{item.phone}</TableCell>
                      <TableCell>
                        <p className="flex justify-between">
                          <Button
                            variant="contained"
                            color="primary"
                            onClick={() => {
                              if (
                                window.confirm(
                                  `Are you sure you want to delete ${item.name}?`
                                )
                              ) {
                                DeleteVendor(item.id);
                              }
                            }}
                          >
                            Delete
                          </Button>
                          <Button
                            variant="contained"
                            color="primary"
                            className="ml-2"
                            onClick={() => {
                              GetPro(item.id);
                            }}
                          >
                            Products
                          </Button>
                        </p>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Card className="mt-4">
              <CardContent>
                <Typography variant="h5" component="h2">
                  Products
                </Typography>
                <TableContainer component={Paper}>
                  <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Price</TableCell>
                        <TableCell>Description</TableCell>
                        <TableCell>Category</TableCell>
                        <TableCell>Same Day Delivery</TableCell>
                        <TableCell>Type</TableCell>
                        <TableCell>Images</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {products.map((item: any) => (
                        <TableRow
                          key={item.id}
                          sx={{
                            '&:last-child td, &:last-child th': { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {item.proName}
                          </TableCell>
                          <TableCell>{item.proPrice}</TableCell>
                          <TableCell>{item.proDescription}</TableCell>
                          <TableCell>{item.proCategory}</TableCell>
                          <TableCell>
                            {item.sameDay ? 'Yes' : 'No'}
                          </TableCell>
                          <TableCell>{item.type}</TableCell>
                          <TableCell>
                            <Image
                              src={item.proImage}
                              width={50}
                              height={50}
                              alt={item.proName}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
              </CardContent>
              <CardActions>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => {
                    setShowProducts(false);
                  }}
                >
                  Back to Vendors
                </Button>
              </CardActions>
            </Card>
          )}
        </div>
      </div>
    </>
  );
};

export default VendorList;

