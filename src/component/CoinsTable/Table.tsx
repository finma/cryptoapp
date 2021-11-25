/* eslint-disable @typescript-eslint/naming-convention */
import {
  Container,
  createTheme,
  LinearProgress,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import Image from "next/image";
import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import NumberFormat from "react-number-format";
import { SearchInput } from "src/component/CoinsTable";
import { CryptoState } from "src/context/CryptoContex";
import { getCoinList } from "src/service/crypto";
import type { CoinTypes } from "src/type/crypto";

const useStyles = makeStyles({
  row: {
    backgroundColor: "#16171a",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#131111",
    },
  },
  pagination: {
    "& .MuiPaginationItem-root": {
      color: "gold",
    },
  },
});

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

export const DataTable = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const { currency, symbol } = CryptoState();
  const classes = useStyles();
  const router = useRouter();

  const fetchCoins = useCallback(async () => {
    setLoading(true);
    const res = await getCoinList(currency);

    setCoins(res);
    setLoading(false);
  }, [currency]);

  useEffect(() => {
    fetchCoins();
  }, [currency, fetchCoins]);

  const handleSearch = () => {
    return coins.filter((coin: CoinTypes) => {
      return coin.name.toLowerCase().includes(search) || coin.symbol.toLowerCase().includes(search);
    });
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container style={{ textAlign: "center" }}>
        <SearchInput searchTerm={search} setSearchTerm={setSearch} />
        <TableContainer component={Paper}>
          {loading ? (
            <LinearProgress style={{ backgroundColor: "gold" }} />
          ) : (
            <Table aria-label="simple table">
              <TableHead style={{ backgroundColor: "#EEBC1D" }}>
                <TableRow>
                  {["Coin", "Price", "24h Change", "Market Cap"].map((head) => {
                    return (
                      <TableCell
                        style={{
                          color: "black",
                          fontSize: "18px",
                          fontWeight: 600,
                        }}
                        key={head}
                        align={head === "Coin" ? "inherit" : "right"}
                      >
                        {head}
                      </TableCell>
                    );
                  })}
                </TableRow>
              </TableHead>

              <TableBody>
                {handleSearch()
                  .slice((page - 1) * 10, (page - 1) * 10 + 10)
                  .map((row: CoinTypes) => {
                    const isProfit = row.price_change_percentage_24h > 0;
                    return (
                      <TableRow
                        onClick={() => {
                          return router.push(`/coin/${row.id}`);
                        }}
                        className={classes.row}
                        key={row.name}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          style={{
                            display: "flex",
                            gap: 15,
                          }}
                        >
                          <Image src={row?.image} alt={row.name} width={50} height={50} />
                          <div style={{ display: "flex", flexDirection: "column" }}>
                            <span
                              style={{
                                textTransform: "uppercase",
                                fontSize: 22,
                              }}
                            >
                              {row.symbol}
                            </span>
                            <span style={{ color: "darkgrey" }}>{row.name}</span>
                          </div>
                        </TableCell>
                        <TableCell align="right">
                          <NumberFormat
                            value={row.current_price}
                            prefix={`${symbol} `}
                            thousandSeparator="."
                            decimalSeparator=","
                            displayType="text"
                          />
                        </TableCell>
                        <TableCell
                          align="right"
                          style={{
                            color: isProfit ? "rgb(14, 203, 129)" : "red",
                            fontWeight: 500,
                          }}
                        >
                          {isProfit && "+"}
                          {row.price_change_percentage_24h.toFixed(2)}%
                        </TableCell>
                        <TableCell align="right">
                          <NumberFormat
                            value={row.market_cap.toString().slice(0, -6)}
                            prefix={`${symbol} `}
                            thousandSeparator="."
                            decimalSeparator=","
                            displayType="text"
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          )}
        </TableContainer>

        <Pagination
          count={Number(handleSearch()?.length / 10)}
          style={{
            padding: 20,
            width: "100%",
            display: "flex",
            justifyContent: "center",
            color: "#ffd700",
          }}
          classes={{ ul: classes.pagination }}
          onChange={(_, value) => {
            setPage(value);
            window.scroll(0, 450);
          }}
        />
      </Container>
    </ThemeProvider>
  );
};
