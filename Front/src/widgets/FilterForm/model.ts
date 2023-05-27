import { createEffect, createEvent, createStore, forward } from "effector";
import { fileChanged } from "../../entities/UploadButton";

export const selectFileId = createEvent();
export const $selectedFileId = createStore("").on(
  selectFileId,
  (_, selectFileId) => selectFileId
);

export const getIDFilesFx = createEffect(async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}PrescriptionProtocol/GetIdFilesUpload`
  );
  return response.json();
});

export const getPositionsFx = createEffect(async () => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}PrescriptionProtocol/GetPositions`
  );
  return response.json();
});

export const $fileIds = createStore([]).on(
  getIDFilesFx.doneData,
  (_, fileIds) => fileIds
);

export const $positions = createStore([]).on(
  getPositionsFx.doneData,
  (_, positions) => positions
);

forward({
  from: [selectFileId, fileChanged],
  to: getIDFilesFx,
});
