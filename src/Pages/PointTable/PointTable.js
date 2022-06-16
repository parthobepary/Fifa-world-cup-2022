import React from "react";
import argentina from '../../assets/flag/argentina.png'
const PointTable = () => {
  return (
    <div>
      <h1 className="text-3xl text-center font-bold uppercase mt-40">
        Point Table
      </h1>
      <div>
        <div class="overflow-x-auto w-full">
          <table class="table w-full">
            <thead>
              <tr>
                <th>Group A</th>
                <th>Mp</th>
                <th>Mp</th>
                <th>Mp</th>
                <th>Mp</th>
                <th>Mp</th>
                <th>Mp</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div class="flex items-center space-x-3">
                    <div class="avatar">
                      <div class="mask mask-squircle w-12 h-12">
                        <img
                          src={argentina}
                          alt=""
                        />
                      </div>
                    </div>
                    <div>
                      <div class="font-bold">Argentina</div>
                      <div class="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>

                <th>
                  <button class="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PointTable;
