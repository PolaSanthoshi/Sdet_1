import { ChangeEvent, useState } from 'react';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';
import SearchMenu from './filteredSearchMenuBox';
import axios from 'axios';
import PopUp from './popUp';
import { useRouter } from 'next/router';
export default function AddMenuBox(props: { menuData: string[]|string ,apiMenu:string[]}) {
  const [itemEnteredInSearchBar, setItemEnteredInSearchBar] = useState('');
  const [isSearchToBeShown,setIsSearchBarToBeShown]=useState(false);
  const [listOfItems, setListOfItems] = useState<any>(props.menuData==''?[]:props.menuData);
  const [showConfimation, setShowConfimation] = useState(false);
  const [customMessage, setCustomMessage] = useState('');
  const router=useRouter();
  function inputChange(e: ChangeEvent<HTMLInputElement>) {
    setItemEnteredInSearchBar(e.target.value);
    setIsSearchBarToBeShown(true)
  }
  function plusClick() {
    if (itemEnteredInSearchBar.trim()) {
      const isValuePresent=listOfItems.find((item:string)=>item.replace(' ','').toLowerCase()==itemEnteredInSearchBar.replace(' ','').toLowerCase());
      if(!isValuePresent){
      setListOfItems([itemEnteredInSearchBar,...listOfItems]);
      }else{
        setCustomMessage('Item is already present in List');
        setShowConfimation(true);
      }
      setItemEnteredInSearchBar('');
    }
  }
  function deleteClick(valueToDel: string) {
    setListOfItems(listOfItems.filter((val: string) => val !== valueToDel));
  }
  async function submitClick(e: any) {
    if (listOfItems.length === 0) {
     await axios.post('/.netlify/functions/menu',[]).then((response) => {
        setCustomMessage('Items are removed from list successfully');
        setShowConfimation(true);
      });
    } else {
      axios.post('/.netlify/functions/menu', listOfItems).then((response) => {
        setCustomMessage('Items are added successfully');
        setShowConfimation(true);
      });
    }
  }
 
  return (
    <div className="w-full px-10  max-w-[500px] h-[340px] bg-blue-300 rounded-lg pt-2 justify-center items-center">
      {/* <div className='ml-4 cursor-pointer' onClick={arrowLeftClick}><FaArrowLeft/></div> */}
      <div className="m-5 flex w-full justify-center items-center ">
        <input
          type="text"
          value={itemEnteredInSearchBar}
          placeholder="Add item..."
          className="p-2 w-[250px] h-8 text-[13px] rounded-lg shadow-lg focus:outline-none focus:ring focus:border-blue-300"
          onChange={inputChange}
        />
        <div
          className={`${
            itemEnteredInSearchBar.trim()
              ? 'opacity-100 cursor-pointer'
              : 'opacity-40 cursor-not-allowed'
          } ml-3 w-8 h-8 bg-black text-white font-bold flex justify-center items-center rounded-lg`}
          onClick={plusClick}
        >
          +
        </div>
      </div>
     { isSearchToBeShown&&<div className=' left-0 right-0 top- m-auto absolute'> <SearchMenu apiMenu={props.apiMenu} itemtoSearch={itemEnteredInSearchBar} setSelectedItem={(elem)=>{setItemEnteredInSearchBar(elem);setIsSearchBarToBeShown(false)}}/></div>}
      <div className="w-full bg-white m-auto h-[200px] overflow-y-scroll scrollbar px-5">
        {listOfItems.length !== 0 &&
          listOfItems.map((each: string, index: number) => each!='empty' && <div
              key={index}
              className="w-full my-2 flex justify-between items-center mb-4 pb-2 font-semibold text-slate-700 border-solid border-b-[1px] border-slate-200"
            >
              {each[0].toUpperCase()+each.slice(1)}
              <div className="flex gap-5 text-[10px] text-slate-400">
                <div
                  className="hover:text-slate-800 cursor-pointer"
                  onClick={() => deleteClick(each)}
                >
                  <FaTrash />
                </div>
              </div>
            </div>
          )}
      </div>
      <div className="w-full flex justify-center">
        <button
          className="mt-3 font-bold p-[2px] text-sm rounded-lg border-solid border-black border-2 hover:border-slate-700 hover:text-slate-500"
          onClick={submitClick}
        >
          Save & Submit
        </button>
      </div>
      {showConfimation && (
        <PopUp
          message={customMessage}
          changeView={() => setShowConfimation(!showConfimation)}
        />
      )}
    
    </div>
  );
}