import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';


const useStyles = makeStyles({
    table: {
      backgroundColor: "#4d4d4d",
    },
    tableText: {
        color: 'white'
    }
  });

const SongTable = ({songs}) => {
    
    const classes = useStyles();

    return (
        <TableContainer>
            <Table aria-label="simple table" className={classes.table}>
                <TableHead>
                    <Typography variant="h6" color="error">Canciones favoritas</Typography>
                    <TableRow>
                        <TableCell><Typography variant="body1"> Nombre </Typography></TableCell>
                        <TableCell><Typography variant="body1"> Album </Typography></TableCell>
                        <TableCell><Typography variant="body1"> Duración </Typography></TableCell>
                        <TableCell><Typography variant="body1"> Artista </Typography></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    <Divider variant="middle" />
                    {songs.map((s) => (
                        <TableRow>
                            <TableCell align="left" className={classes.tableText}>{s.name}</TableCell>
                            <TableCell align="left" className={classes.tableText}>{s.album}</TableCell>
                            <TableCell align="left" className={classes.tableText}>{s.duration}</TableCell>
                            <TableCell align="left" className={classes.tableText}>{s.artist}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};

export default SongTable;