import {
  createEffect,
  createEvent,
  createStore,
  forward,
  combine,
} from "effector";
import { $selectedFileId, selectFileId } from "../FilterForm/model";

export const fetchData = createEvent();

// Создаем эффект для выполнения запроса данных
export const fetchEffect = createEffect(async () => {
  if (!$selectedFileId) {
    return;
  }
  const response = await fetch(
    `${
      import.meta.env.VITE_API_URL
    }PrescriptionProtocol/GetProtocolAnalysis?idFileUpload=${$selectedFileId.getState()}`
  );
  return response.json();
});

forward({
  from: [selectFileId, fetchData],
  to: fetchEffect,
});

export const tableData = createStore([]);

tableData.on(fetchEffect.doneData, (_, data) => data);

const fetchDataStore = createStore(fetchData);

export const tableModel = combine({
  data: tableData,
  fetchData: fetchDataStore,
});
