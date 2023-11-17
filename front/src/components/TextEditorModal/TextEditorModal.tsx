// export default function TextEditorModal() {
//   return (
//     <div
//       className={openEditModal ? styles.open_modal : styles.close_modal}
//       style={{ top: modalPosition.y, left: modalPosition.x }}
//     >
//       <div className="border-r-1 select-none">
//         <div className={styles.drop_down}>
//           Edit
//           <FileEdit width={17} height={17} />
//         </div>
//       </div>

//       <div className="flex pr-1 border-r-1 gap-1">
//         <InlineStyleControls onToggle={styleSetter} editorState={editorState} />
//       </div>
//       <div className={styles.icon_style}>
//         <Link width={17} height={17} className="flex" />
//       </div>
//     </div>
//   );
// }
