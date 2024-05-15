import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsAction } from "../store/itemSlice";
import { fetchStatusAction } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const constroller = new AbortController();
    const signal = constroller.signal;

    dispatch(fetchStatusAction.markFetchingStarted());
    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusAction.markFetchDone());
        dispatch(fetchStatusAction.markFetchingFinished());
        dispatch(itemsAction.addInitialItems(items[0]));
      });

    return () => {
      constroller.abort();
    };
  }, [fetchStatus]);

  return <></>;
};
export default FetchItems;
