import ETHAmount from "./ETHAmount";

type Event = {
  amount: string;
  timestamp: number;
  beneficiary: string;
  txHash: string;
  note: string;
};

export default function PayActivityItem({ event }: { event: Event }) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignContent: "space-between",
        }}
      >
        <div>
          <div>Paid</div>
          <div>
            <ETHAmount amountWei={event.amount} />
          </div>
        </div>

        <div style={{ textAlign: "right" }}>
          {event.timestamp && (
            <div>
              <a href={`https://etherscan.io/tx/${event.txHash}`}>
                {new Date(event.timestamp * 1000).toUTCString()}
              </a>
            </div>
          )}

          {/* <FormattedAddress address={event.beneficiary} /> */}
        </div>
      </div>

      {/* <RichNote note={event.note} /> */}
    </div>
  );
}
