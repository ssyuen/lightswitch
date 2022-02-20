import {Col, Collapse, Divider, Layout, Row} from "antd";
import {Navbar} from "./Navbar";
import Title from "antd/es/typography/Title";
import Paragraph from "antd/es/typography/Paragraph";
import {Content, Footer} from "antd/es/layout/layout";
import CollapsePanel from "antd/es/collapse/CollapsePanel";
import {BulbOutlined} from "@ant-design/icons";


export const Risks = () => {


    return (
        <div className="App">
            <Layout className="layout">
                <Navbar/>
                <Content style={{padding: "0 50px"}}>
                    <Row>
                        <Col span={24}>
                            <Title level={1}>
                                Sector Risks
                            </Title>
                            <Paragraph>
                                Many non-new investors know to pick ETFs/managed funds since those are already
                                diversified due to the nature of how they were built. However, these types of investors
                                may not know the risks associated with a type of ETF/fund.
                            </Paragraph>
                        </Col>
                    </Row>
                    <Row>

                        <Col xs={{span: 24}} sm={{span: 14}} lg={{span: 13}} xl={{span: 6}}>
                            <Title level={2}>
                                Sector ETFs
                            </Title>
                            <Collapse>
                                <CollapsePanel header={"Consumer Discretionary"}>
                                    The consumer discretionary industries can be significantly affected by the
                                    performance of the overall economy, interest rates, competition, consumer confidence
                                    and spending, and changes in demographics and consumer tastes.
                                </CollapsePanel>
                                <CollapsePanel header={"Consumer Staples"}>The consumer staples industries can be
                                    significantly affected by demographic and product trends, competitive pricing, food
                                    fads, marketing campaigns, environmental factors, government regulation, the
                                    performance of the overall economy, interest rates, and consumer
                                    confidence.</CollapsePanel>
                                <CollapsePanel header={"Energy"}>The energy industries can be significantly affected by
                                    fluctuations in energy prices and supply and demand of energy fuels, energy
                                    conservation, the success of exploration projects, and tax and other government
                                    regulations.</CollapsePanel>
                                <CollapsePanel header={"Financials"}>The financials industries are subject to extensive
                                    government regulation, can be subject to relatively rapid change due to increasingly
                                    blurred distinctions between service segments, and can be significantly affected by
                                    availability and cost of capital funds, changes in interest rates, the rate of
                                    corporate and consumer debt defaults, and price competition.</CollapsePanel>
                                <CollapsePanel header={"Health Care"}>The health care industries are subject to
                                    government regulation and reimbursement rates, as well as government approval of
                                    products and services, which could have a significant effect on price and
                                    availability, and can be significantly affected by rapid obsolescence and patent
                                    expirations.

                                </CollapsePanel>
                                <CollapsePanel header={"Industrials"}>Industrials industries can be significantly
                                    affected by general economic trends, changes in consumer sentiment and spending,
                                    commodity prices, legislation, government regulation and spending, import controls,
                                    and worldwide competition, and can be subject to liability for environmental damage,
                                    depletion of resources, and mandated expenditures for safety and pollution control.

                                </CollapsePanel>
                                <CollapsePanel header={"Technology"}>The technology industries can be significantly
                                    affected by obsolescence of existing technology, short product cycles, falling
                                    prices and profits, competition from new market entrants, and general economic
                                    condition.

                                </CollapsePanel>
                                <CollapsePanel header={"Materials"}>The materials industries can be significantly
                                    affected by the level and volatility of commodity prices, the exchange value of the
                                    dollar, import controls, worldwide competition, liability for environmental damage,
                                    depletion of resources, and mandated expenditures for safety and pollution control.

                                </CollapsePanel>
                                <CollapsePanel header={"Real Estate"}>Changes in real estate values or economic
                                    downturns can have a significant negative effect on issuers in the real estate
                                    industry.

                                </CollapsePanel>
                                <CollapsePanel header={"Communication"}>The communication services industries are
                                    subject to government regulation of rates of return and services that may be
                                    offered, and can be significantly affected by intense competition.

                                </CollapsePanel>
                                <CollapsePanel header={"Utilities"}>The utilities industries can be significantly
                                    affected by government regulation, financing difficulties, supply and demand of
                                    services or fuel, and natural resource conservation.

                                </CollapsePanel>

                            </Collapse>
                        </Col>
                        <Col xs={{span: 24}} sm={{span: 14}} lg={{span: 13}} xl={{span: 6}}>
                            <Title level={2}>
                                Active Equity ETFs
                            </Title>
                            <Collapse>
                                <CollapsePanel header={"What are Active Equity ETFs?"}>These ETFs are different from
                                    traditional ETFs. Traditional
                                    ETFs tell the public what assets they hold each day. These
                                    ETFs will not. This may create additional risks for your investment. For example,
                                    you may have to pay more money
                                    to trade the shares of these ETFs. These ETFs will provide less information to
                                    traders, who tend to charge more for
                                    trades when they have less information; the price you pay to buy ETF shares on an
                                    exchange may not match the value
                                    of each ETF’s portfolio. The same is true when you sell shares.</CollapsePanel>
                            </Collapse>
                        </Col>
                        <Col xs={{span: 24}} sm={{span: 14}} lg={{span: 13}} xl={{span: 6}}>
                            <Title level={2}>
                                Fixed Income ETFs
                            </Title>
                            <Collapse>
                                <CollapsePanel header={"What is a Fixed Income ETF?"}>Fixed Income ETFs are generally
                                    investing in individual bonds which involve risks such as interest rate risk,
                                    inflation risk, credit and default risk, call risk, and liquidity risk. The issuer
                                    of the bond or bond type can carry additional risks.

                                </CollapsePanel>
                                <CollapsePanel header={"Interest Rate Risk"}>All bonds are susceptible to fluctuations
                                    in interest rates. If interest rates rise, bond prices will generally decline,
                                    despite the lack of change in both the coupon and maturity. The degree of price
                                    volatility due to changes in interest rates is usually more pronounced for
                                    longer-term securities. Unlike individual bonds, most bond funds do not have a
                                    maturity date, so avoiding losses caused by price volatility by holding them until
                                    maturity is not possible.

                                </CollapsePanel>
                                <CollapsePanel header={"Inflation Risk"}>Inflation risk is a risk that the income
                                    generated may be lower than the rate of inflation. Inflation may diminish the
                                    purchasing power of a bond's interest and principal.

                                </CollapsePanel>
                                <CollapsePanel header={"Credit and Default Risk"}>Bonds and their issuers generally
                                    receive a credit grade rating by independent rating agencies. An ETF can have a
                                    stated objective to invest in investment grade or better or in lower grade bonds
                                    with higher yields. Changes in credit rating can also affect prices. If one of the
                                    major rating services lowers its credit rating for a particular issue, the price of
                                    that security usually declines. Less creditworthy issuers may be more likely to
                                    default on interest payments or principal repayment. If a bond issuer fails to make
                                    either a coupon or principal payment when they are due, or fails to meet some other
                                    provision of the bond indenture, it is said to be in default.

                                </CollapsePanel>
                                <CollapsePanel header={"Call Risk"}>Some bonds have call features, which means they can
                                    be redeemed or paid off at the issuer's discretion before maturity. Typically, an
                                    issuer will call a bond when interest rates fall, potentially leaving investors with
                                    a capital loss or loss in income and less favorable reinvestment options.

                                </CollapsePanel>
                                <CollapsePanel header={"Liquidity Risk"}>If a bond is not traded on a regular basis, the
                                    market for this bond may not be considered liquid. This can be attributed to the
                                    large number of issuers and variety of securities. For example, with limited
                                    exceptions for some large more actively traded issues, the chances of finding a
                                    specific municipal bond in the secondary market at any given time are relatively
                                    small. Selling prior to maturity can present a challenge for municipal bond
                                    investors due to the fragmented and thinly traded nature of the market.

                                </CollapsePanel>
                            </Collapse>
                        </Col>
                        <Col xs={{span: 24}} sm={{span: 14}} lg={{span: 13}} xl={{span: 6}}>
                            <Title level={2}>
                                Smart Beta ETFs
                            </Title>
                            <Collapse>
                                <CollapsePanel header={"What are Smart Beta ETFs?"}>
                                    <p>
                                        Stock markets, especially foreign
                                        markets, are volatile and can decline significantly in response to adverse
                                        issuer,
                                        political, regulatory, market, or economic developments. Foreign securities are
                                        subject to interest rate, currency exchange rate, economic, and political risks.
                                        The
                                        securities of smaller, less well-known companies can be more volatile than those
                                        of
                                        larger companies. There is no guarantee that a factor-based investing strategy
                                        will
                                        enhance performance or reduce risk. Before investing, make sure you understand
                                        how
                                        the fund's factor investment strategy may differ from more traditional index
                                        funds.
                                        Depending on market conditions, fund performance may under perform compared to
                                        funds
                                        that seek to track a market-capitalization weighted index. The return of an
                                        index
                                        ETF is usually different from that of the index it tracks because of fees,
                                        expenses
                                        and tracking error. An ETF may trade at a premium or discount to its Net Asset
                                        Value
                                        (NAV).

                                    </p>
                                    <p>
                                        Beta is a measure of risk. It represents how a security has responded in the
                                        past to movements of the securities market. Smart Beta represents and
                                        alternative investment methodology to typical cap-weighted benchmark investing
                                        and there is no guarantee that a smart beta or factor-based investing strategy
                                        will enhance performance or reduce risk.
                                    </p>

                                </CollapsePanel>
                            </Collapse>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={24}>
                            <Divider/>
                            <Paragraph>
                                These aren't ALL the risks you can know, but it is definitely a good start to educating
                                yourself.
                            </Paragraph>
                            <Paragraph>
                                Some great resources into finding more about risks is to go to <a
                                href={"https://www.investopedia.com/"}>Investopedia</a> or even BlackRock themselves!
                            </Paragraph>
                        </Col>

                    </Row>
                </Content>
                <Footer style={{
                    textAlign: "center",

                }}>
                    <BulbOutlined/>
                    lightswitch ©2022 Created by Samuel Yuen
                </Footer>
            </Layout>
        </div>
    )
}
