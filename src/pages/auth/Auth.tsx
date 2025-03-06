const Auth = ({ children, margin }: { children: React.ReactNode, margin?: string }) => {
  return (
    <div className="h-screen w-full bg-[url(/elibr.jpeg)] bg-no-repeat bg-center bg-cover">
      <header className="pt-5 px-10">
        <div className="bg-white rounded-full w-fit">
          <img src="/elib copy.png" alt="" className="w-10 h-10" />
        </div>
      </header>
      <div className={`flex justify-end -ml-14 w-full h-auto ${margin}`}>
        {children}
      </div>
    </div>
  );
};

export default Auth;
