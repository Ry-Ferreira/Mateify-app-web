import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import IconButton from '@material-ui/core/IconButton';
import AlbumIcon from '@material-ui/icons/Album';

const useStyles = makeStyles({
    table: {
      backgroundColor: "rgb(0, 102, 153)",
    },
    tableText: {
        color: 'white'
    }
  });

const UserTable = ({users, onClickDisc}) => {
    
    const classes = useStyles();

    return (
        <TableContainer className={classes.table}>
            <Table aria-label="simple table">
                <TableHead>
                    <Typography variant="h6">Usuarios</Typography>
                    <TableRow className={classes.tableText}>
                        <TableCell><Typography variant="body1"> Nombre </Typography></TableCell>
                        <TableCell><Typography variant="body1"> Apellido </Typography></TableCell>
                        <TableCell><Typography variant="body1"> Contacto </Typography></TableCell>
                        <TableCell><Typography variant="body1"> Edad </Typography></TableCell>
                        <TableCell><Typography variant="body1"> Lista </Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <Divider variant="middle" />
                    {users.map((u) => (
                        <TableRow>
                            <TableCell align="left" className={classes.tableText}>{u.name}</TableCell>
                            <TableCell align="left" className={classes.tableText}>{u.lastName}</TableCell>
                            <TableCell align="left" className={classes.tableText}>{u.email}</TableCell>
                            <TableCell align="left" className={classes.tableText}>{u.age}</TableCell>
                            <TableCell align="left" className={classes.tableText}>
                                <Box>
                                    <IconButton onClick={() => onClickDisc(u._id)}>
                                        <AlbumIcon color="error" />
                                    </IconButton>
                                </Box>
                            </TableCell>
                        </TableRow>

                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UserTable;