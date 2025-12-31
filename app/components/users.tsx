export default async function Users(){

     const blob = process.env.BLOB_URL;
  const url = process.env.BASE_URL;
  const res = await fetch(
    `${url}/api/companies/1?depth=2&draft=false&locale=undefined&trash=false`
  );
  const data = await res.json();
  console.log(data);
    return(
        <div className="flex flex-col items-center justify-center mt-[50px]">
            <h3 className="text-[#05003899]">{data.title}</h3>
            <div className="flex items-center w-full justify-between mt-[40px]">
                {data.images.map((image:any,index:number)=>(
                    <img key={index} className=" h-[50px]" src={blob+image.image.filename} alt="" />
                ))}
                
            </div>
        </div>
    )
}