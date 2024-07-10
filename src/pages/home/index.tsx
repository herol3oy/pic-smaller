import { Button, Divider, Flex, Space } from "antd";
import style from "./index.module.scss";
import { observer } from "mobx-react-lite";
import { Logo } from "@/components/Logo";
import { MenuOutlined } from "@ant-design/icons";
import { gstate } from "@/global";
import { homeState } from "@/states/home";
import { UploadCard } from "@/components/UploadCard";
import { useWorkerHandler } from "@/engines/transform";
import { Compare } from "@/components/Compare";
import { useResponse } from "@/media";
import { RightOption } from "./RightOption";
import { LeftContent } from "./LeftContent";

const MainContent = observer(() => {
  return homeState.list.size === 0 ? (
    <UploadCard />
  ) : (
    <>
      <LeftContent />
      <RightOption />
    </>
  );
});

const Header = observer(() => {
  const { isPC } = useResponse();

  return (
    <Flex align="center" justify="space-between" className={style.header}>
      <div>
        <Logo title={gstate.locale?.logo} />
      </div>
      <Space>
        {!isPC && homeState.list.size > 0 && (
          <>
            <Divider type="vertical" style={{ background: "#dfdfdf" }} />
            <Button
              icon={<MenuOutlined />}
              onClick={() => {
                homeState.showOption = !homeState.showOption;
              }}
            />
          </>
        )}
      </Space>
    </Flex>
  );
});

const Body = observer(() => {
  return (
    <Flex align="stretch" className={style.main}>
      <MainContent />
    </Flex>
  );
});

const Home = observer(() => {
  useWorkerHandler();

  return (
    <div className={style.container}>
      <Header />
      <Body />
      {homeState.compareId !== null && <Compare />}
    </div>
  );
});

export default Home;
